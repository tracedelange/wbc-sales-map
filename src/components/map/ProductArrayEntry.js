import { Divider } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductArrayEntry = ({ data, products }) => {


    let productKey = Object.keys(products).find(key => products[key].id === data.product_id)
    let productName = products[productKey].product_name

    const productFilter = useSelector(state => state.data.productFilter)


    return (
        <>
        <li className={productFilter ? productFilter.id === data.product_id ? 'info-window-list-item filter-item' : 'info-window-list-item' : 'info-window-list-item'}>
            <p className='product-text'>
                {productName}
            </p>
            <p className='product-text'>
                {data.sale_date}
            </p>
        </li>
        <Divider flexItem orientation='horizontal' />
        </>
    )
}

export default ProductArrayEntry
