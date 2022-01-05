import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getDisplayData } from '../requests'

export const useDispatchGetProducts = () => {

    const productData = useSelector(state => state.data.productData)
    const dispatch = useDispatch()

    useEffect(() => {
        if (productData.length < 1) {
            getProductData()
                .then(data => {
                    if (data) {
                        dispatch({ type: 'SET_PRODUCT_DATA', payload: data })
                        dispatch({ type: 'SET_DATA_LOADED', payload: true })
                    }
                })
        }
    }, [])

}