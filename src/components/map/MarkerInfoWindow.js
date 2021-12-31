import React from 'react'
import { InfoWindow } from '@react-google-maps/api'
import ProductArrayEntry from './ProductArrayEntry'
import { useSelector } from 'react-redux'
import {Divider} from '@mui/material'

const MarkerInfoWindow = ({data, handleClose}) => {

    
    const productData = useSelector(state => state.data.productData)
    
    // console.log(data)
    // console.log(productData)

    const productArray = data.unique_orders.map(item => <ProductArrayEntry key={item.product_id} data={item} products={productData} />)

    return (
        <InfoWindow
            onCloseClick={handleClose}
            position={{
                lat: data.latitude + 0.001,
                lng: data.longitude
            }}>
            <div className='info'>
                <h1>
                    {data.display_name ? data.display_name : data.account_name} {/* If display name exists, display it, else display the default customer name */}
                </h1>
                <ul className='info-window-list'>
                    <Divider flexItem orientation='horizontal' />
                    {productArray}
                </ul>

                <p className='warning'>Make sure to call ahead and verify your vendor still has our product in stock!</p>
            </div>

        </InfoWindow>
    )
}

export default MarkerInfoWindow
