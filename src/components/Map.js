import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import mapConfig from '../map-config';
import ProductCard from './ProductCard';
import IconSource from '../assets/images/pin-icon.png'
import testObject from '../testObject';
import WBCLogo from '../assets/images/logo-marker-smaller.png'

const Map = ({ premiseType, productFilterState, data }) => {

    const [selectedMarker, setSelectedMarker] = useState('');

    const [productsCarried, setProductsCarried] = useState([]);

    //If filter state is changed, close info window if it is open
    useEffect(() => { setSelectedMarker(null) }, [productFilterState])

    const handleMarkerClick = (dataPoint, pos) => {

        let adjustedDataPoint = {
            ...dataPoint,
            latLong: pos,
            cusName: dataPoint.cusName,
            disName: dataPoint.displayName,
            reactKey: Object.keys(dataPoint['orders'])[0]
        }

        // console.log(adjustedDataPoint.disName)

        setSelectedMarker(adjustedDataPoint)

        let newProducts = []
        let newProductsNames = []

        let keys = Object.keys(dataPoint['orders'])

        keys.slice(0).reverse().map((key) => {

            if (newProductsNames.includes(dataPoint['orders'][key]['productName'])) {
                // console.log('')
            } else {
                newProducts.push(dataPoint['orders'][key])
                newProductsNames.push(dataPoint['orders'][key]['productName'])
            }
        })

        setProductsCarried(newProducts)
    }


    let productArray = (productsCarried).map((product) => {

        return <ProductCard key={product.productName} product={product} />
    })

    const handleMapClick = () => {
        //if map is clicked and info window is open, close it
        setSelectedMarker(null)
    }

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}>

            <GoogleMap
                zoom={mapConfig.zoom}
                center={mapConfig.center}
                mapContainerStyle={mapConfig.styles}
                onClick={handleMapClick}
                options={{
                    mapId: mapConfig.mapId,
                    gestureHandling: "greedy",
                    fullscreenControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,

                }}
            >

                <Marker opacity={.8} zIndex={0} icon={WBCLogo} position={mapConfig.center} />

                {/* Map over the list of orders for the last month and create a markers for each. */}
                {/* this is where we can filter out results as well as a search function */}

                {Object.keys(data).map(function (keyName, keyIndex) {

                    let lat = parseFloat(((data[keyName].latLong).split(',')[0]).split(' ')[1])
                    let long = parseFloat((data[keyName].latLong).split(',')[1].split(' ')[2])
                    let pos = { lat: lat, lng: long }

                    if (premiseType !== 'Both') {
                        if (data[keyName]['premiseType'] === premiseType.replace(' ', '')) {
                            return <Marker optimized={true} icon={IconSource} onClick={() => { handleMarkerClick(data[keyName], pos) }} key={keyName} position={pos} />
                        } //I think this code block is depreciated because of premise filter not being used
                    } else {
                        if (productFilterState.length === 0) {
                            return (
                                <Marker
                                    optimized={true}
                                    icon={{
                                        url: IconSource,
                                    }}
                                    opacity={.95}
                                    onClick={() => { handleMarkerClick(data[keyName], pos) }}
                                    key={keyName}
                                    position={pos}
                                />)
                        } else {
                            let keys = Object.keys(data[keyName]['orders'])
                            for (let key of keys) {
                                let product = data[keyName]['orders'][key]['productName']
                                if (product.split(' ').some((e) => testObject[productFilterState].includes(e))) {
                                    return <Marker optimized={true} icon={IconSource} onClick={() => { handleMarkerClick(data[keyName], pos) }} key={keyName} position={pos} />
                                }
                            }
                        }
                    }
                })}
                {selectedMarker && (
                    <InfoWindow
                        onCloseClick={() => {
                            setSelectedMarker('');
                        }}
                        position={{
                            lat: selectedMarker.latLong.lat + 0.001,
                            lng: selectedMarker.latLong.lng
                        }}>
                        <div className='info'>
                            <h1>
                                {/* {selectedMarker.disName} */}
                                {selectedMarker.disName === undefined ? selectedMarker.cusName : selectedMarker.disName} {/* If display name exists, display it, else display the default customer name */}
                            </h1>
                            {/* <h2>Sale Type: {(selectedMarker.premiseType).replace(/([a-z](?=[A-Z]))/g, '$1 ')}</h2> */}
                            {productArray}
                            <p>Make sure to call ahead and verify your vendor still has our product in stock!</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;


