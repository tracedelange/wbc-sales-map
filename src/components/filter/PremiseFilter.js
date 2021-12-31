import { Button, Menu, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'

const PremiseFilter = () => {

    const dispatch = useDispatch()

    const premiseFilter = useSelector(state => state.data.premiseFilter)


    const handlePremiseFilterClick = () => {

        switch (premiseFilter) {
            case null:
                dispatch({type: 'SET_PREMISE_FILTER', payload: 'on'})
                break;
            case 'on':
                dispatch({type: 'SET_PREMISE_FILTER', payload: 'off'})
                break;
            case 'off':
                dispatch({type: 'SET_PREMISE_FILTER', payload: null})
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
