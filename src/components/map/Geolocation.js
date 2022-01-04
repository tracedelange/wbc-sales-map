import React, { useState } from 'react'
import { Button } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation';
import { useDispatch } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import GeolocationFailedDialog from './GeolocationFailedDialog'

const Geolocation = () => {


    const dispatch = useDispatch()
    const [navigationLoading, setNavigationLoading] = useState(false)
    const [navigationFailWarningActive, setNavigationFailWarningActive] = useState(false)
    const [navFailedDialogOpen, setNavFailedDialogOpen] = useState(false)

    const navError = (error) => {
        console.warn(error)
        setNavigationLoading(false)
        setNavigationFailWarningActive(true)
    }

    const navSuccess = (data) => {

        console.log(data)
        if (data.coords) {
            dispatch({ type: "SET_MAP_CENTER", payload: { lat: data.coords.latitude, lng: data.coords.longitude } })
            setNavigationLoading(false)
        } else {
            setNavigationLoading(false)
        }

    }

    const handleNavigationClick = () => {
        setNavigationLoading(true)
        navigator.geolocation.getCurrentPosition(navSuccess, navError)
    }

    const handleFailNavClick = () => {

        setNavFailedDialogOpen(true)

    }


    return (
        <>
            <GeolocationFailedDialog open={navFailedDialogOpen} handleClose={() => { setNavFailedDialogOpen(false) }} />
            <Button className='nav-button' onClick={navigationFailWarningActive ? handleFailNavClick : handleNavigationClick} variant='contained' >
                {navigationFailWarningActive ?
                    <DoNotDisturbIcon />
                    :
                    navigationLoading ?
                        <CircularProgress size={25} color='secondary' />
                        :
                        <NavigationIcon />
                }
            </Button>

        </>
    )
}

export default Geolocation
