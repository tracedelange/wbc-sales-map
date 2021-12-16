import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getDisplayData } from '../../requests'

export const useDispatchGetDisplayData = () => {

    const displayData = useSelector(state => state.data.displayData)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(displayData)
        if (displayData.length < 1) {
            getDisplayData()
                .then(data => {
                    if (data) {
                        console.log(data)
                        dispatch({ type: 'SET_DISPLAY_DATA', payload: data })
                        dispatch({ type: 'SET_DATA_LOADED', payload: true })
                    }
                })
        }
    }, [])



}