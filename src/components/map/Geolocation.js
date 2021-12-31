import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation';
import { useDispatch, useSelector } from 'react-redux'
import { Marker } from '@react-google-maps/api';


const Geolocation = () => {


    const dispatch = useDispatch()
    const userLocation = useSelector(state => state.data.userLocation)

    const handleNavigationClick = () => {
        console.log('nav click')
        navigator.geolocation.getCurrentPosition((data) => {
            dispatch({ type: "SET_MAP_CENTER", payload: { lat: data.coords.latitude, lng: data.coords.longitude } })
        })

    }

    const [navigationActive, setNavigationActive] = useState(true)

    useEffect(() => {
        if (!navigator.geolocation) {
            setNavigationActive(false)
        }
    }, [])



    return (
        <>
            <Button disabled={!navigationActive} className='nav-button' onClick={handleNavigationClick} variant='contained' >
                <NavigationIcon />
            </Button>

        </>
    )
}

export default Geolocation
