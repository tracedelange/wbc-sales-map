import React from 'react'


const ProductArrayEntry = ({ data, products }) => {


    let productKey = Object.keys(products).find(key => products[key].id === data.product_id)
    let productName = products[productKey].product_name


    return (
        <li className='info-window-list-item'>
            <p className='product-text'>
                {productName} - {data.sale_date}
            </p>
        </li>
    )
}

export default ProductArrayEntry
