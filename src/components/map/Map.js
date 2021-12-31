import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import mapConfig from '../../map-config';
import RedIconSource from '../../assets/images/pin-icon.png'
import BlueIconSource from '../../assets/images/blue-pin-icon.png'
import WBCLogo from '../../assets/images/logo-marker-smaller.png'
import { useSelector } from 'react-redux'
import MarkerInfoWindow from './MarkerInfoWindow';
import Geolocation from './Geolocation';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Map = () => {

    const [selectedMarker, setSelectedMarker] = useState('');
    const [markerArray, setMarkerArray] = useState([])


    const handleMarkerClick = (data) => {
        setSelectedMarker(data)
    }


    const handleMapClick = () => {
        //if map is clicked and info window is open, close it
        setSelectedMarker(null)
    }

    const productFilter = useSelector(state => state.data.productFilter)
    const displayData = useSelector(state => state.data.displayData)
    const premiseFilter = useSelector(state => state.data.premiseFilter)

    const mapCenter = useSelector(state => state.data.mapCenter)

    const userLocation = useSelector(state => state.data.userLocation)


    useEffect(() => {

        setSelectedMarker(null)

    }, [productFilter, premiseFilter])

    const filterDisplayData = (premiseFilter, displayData) => {

        switch (premiseFilter) {
            case "on":
                return displayData.filter((account => {
                    if (account.on_premise) {
                        return account
                    }
                }))
            case 'off':
                return displayData.filter((account => {
                    if (!account.on_premise) {
                        return account
                    }
                }))
            case null:
                return displayData
            default:
                return;
        }
    }


    useEffect(() => {


        let filteredDisplayData = filterDisplayData(premiseFilter, displayData)

        const preMarkerArray = filteredDisplayData.map(item => {

            let pos = { lat: item.latitude, lng: item.longitude }

            return (
                <Marker
                    optimized={true}
                    icon={{
                        url: item.on_premise ? BlueIconSource : RedIconSource,
                    }}
                    opacity={.95}
                    onClick={() => { handleMarkerClick(item) }}
                    key={item.id}
                    position={pos}
                />
            )
        })

        setMarkerArray(preMarkerArray)

    }, [displayData, premiseFilter])


    const handleMarkerClose = () => {
        setSelectedMarker(null)
    }


    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}>

            <GoogleMap
                zoom={mapConfig.zoom}
                center={mapCenter}
                mapContainerStyle={mapConfig.styles}
                onClick={handleMapClick}
                options={{
                    mapId: mapConfig.mapId,
                    gestureHandling: "greedy",
                    fullscreenControl: false,
                    streetViewControl: false,
                    mapTypeControl: false

                }}
            >

                <Geolocation />

                {/* {userLocation ?
                    <Marker
                    opacity={1}
                    icon={{ url: AccountBoxIcon}}
                    position={userLocation}
                    optimized={false}
                    />
                    :
                    null
                } */}

                <Marker opacity={.8} zIndex={0} icon={WBCLogo} position={mapConfig.center} />
                {markerArray}

                {selectedMarker && (
                    <MarkerInfoWindow data={selectedMarker} handleClose={handleMarkerClose} />
                )}
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;


