import React from 'react'
import FilterMenu from './FilterMenu'

const ProductFilter = ({handleFilterItemClick, productFilterState}) => {
    return (
        <div id='check-boxes'>
            <FilterMenu productFilterState={productFilterState} handleFilterItemClick={handleFilterItemClick}/>
        </div>
    )
}

export default ProductFilter
