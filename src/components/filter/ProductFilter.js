import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useMobileMediaQuery from '../../hooks/useMobileMediaQuery'

const ProductFilter = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const filterProducts = useSelector(state => state.data.productData)
    const productFilter = useSelector(state => state.data.productFilter)
    const dispatch = useDispatch()

    const isMobile = useMobileMediaQuery()

    const handleProductFilterItemClick = (filterItem) => {
        dispatch({ type: "SET_PRODUCT_FILTER", payload: filterItem })
        dispatch({ type: "FILTER_DISPLAY_DATA", payload: null })

    }

    const clearProductFilter = () => {
        dispatch({ type: "SET_PRODUCT_FILTER", payload: null })
        dispatch({ type: "RESET_DISPLAY_DATA", payload: null })
    }

    const filterArray = Object.keys(filterProducts).map(key => {
        return (
            <MenuItem
                sx={{
                    '&:hover': {
                        backgroundColor: '#C64033',
                        color: "white"

                    }
                }}
                id={filterProducts[key].id}
                onClick={() => handleProductFilterItemClick(filterProducts[key])}
                key={key}>{filterProducts[key].product_name}
            </MenuItem>
        )
    })


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                variant='contained'
                onClick={handleClick}
                sx={isMobile ?
                    {
                        fontSize: "60%",
                        minWidth: 100,
                        maxWidth: 100,
                        maxHeight: 100,
                        minHeight: 40
                    }
                    :
                    null
                }
            >{productFilter ?
                productFilter.product_name
                :
                "Product Filter"}
            </Button>
            <Menu
                open={open}
                onClick={handleClose}
                anchorEl={anchorEl}
            >
                <MenuItem
                    sx={{
                        '&:hover': {
                            backgroundColor: 'black',
                            color: "white"
                        }
                    }}
                    onClick={clearProductFilter}>Clear Filter</MenuItem>
                {filterArray}
            </Menu>
        </div>
    )
}

export default ProductFilter
