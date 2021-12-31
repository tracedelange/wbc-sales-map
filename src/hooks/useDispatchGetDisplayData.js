import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getDisplayData, getProducts } from '../requests'

export const useDispatchGetDisplayData = () => {

    const displayData = useSelector(state => state.data.displayData)
    const productData = useSelector(state => state.data.productData)
    const dispatch = useDispatch()

    useEffect(() => {
        if (displayData.length < 1) {
            
            getDisplayData()
                .then(data => {
                    if (data) {
                        dispatch({ type: 'SET_DISPLAY_DATA', payload: data })
                        dispatch({ type: 'SET_CACHE_DATA', payload: data })
                        dispatch({ type: 'SET_DATA_LOADED', payload: true }) 
                    }
                })
            getProducts()
                .then(data => {
                    if (data) {
                        dispatch({ type: 'SET_PRODUCT_DATA', payload: data })
                    }
                })
        }
    }, [])
}