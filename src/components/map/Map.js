import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import mapConfig from '../../map-config';
import RedIconSource from '../../assets/images/pin-icon.png'
import BlueIconSource from '../../assets/images/blue-pin-icon.png'
import WBCLogo from '../../assets/images/logo-marker-smaller.png'
import { useSelector } from 'react-redux'
import MarkerInfoWindow from './MarkerInfoWindow';


const Map = () => {

    const [selectedMarker, setSelectedMarker] = useState('');



    const handleMarkerClick = (data) => {
        setSelectedMarker(data)
        console.log(data)
    }

    
    
    const handleMapClick = () => {
        //if map is clicked and info window is open, close it
        setSelectedMarker(null)
    }
    
    const productFilter = useSelector(state => state.data.productFilter)
    const displayData = useSelector(state => state.data.displayData)
    

    const markerArray = displayData.map(item => {

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

    const handleMarkerClose = () => {
        setSelectedMarker({})
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
                {markerArray}

                {selectedMarker && (
                    <MarkerInfoWindow data={selectedMarker} handleClose={handleMarkerClose} />
                    
                )}
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;


