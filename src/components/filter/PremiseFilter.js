import { Button, Menu, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import useMobileMediaQuery from '../../hooks/useMobileMediaQuery'

const PremiseFilter = () => {

    const dispatch = useDispatch()

    const premiseFilter = useSelector(state => state.data.premiseFilter)

    const isMobile = useMobileMediaQuery()

    const handlePremiseFilterClick = () => {

        switch (premiseFilter) {
            case null:
                dispatch({ type: 'SET_PREMISE_FILTER', payload: 'on' })
                break;
            case 'on':
                dispatch({ type: 'SET_PREMISE_FILTER', payload: 'off' })
                break;
            case 'off':
                dispatch({ type: 'SET_PREMISE_FILTER', payload: null })
                break;
            default:
                return
        }
    }

    return (
        <>
            <Button
                onClick={handlePremiseFilterClick}
                variant='contained'
                sx={isMobile ?
                    {
                        fontSize: '60%',
                        minWidth: 100,
                        maxWidth: 100,
                        maxHeight: 100,
                        minHeight: 40
                    }
                    :

                    null}
            >
                {premiseFilter ?
                    <>
                        {premiseFilter} Premise
                    </>
                    :
                    <>
                        Premise Filter
                    </>
                }
            </Button>
        </>

    )
}

export default PremiseFilter
