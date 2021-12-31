

const initialState = {
    cacheData: [],
    displayData: [],
    productData: {},
    dataLoaded: false,
    productFilter: null,
    premiseFilter: null,
    userLocation: null,
    mapCenter: { lat: 44.850114, lng: -93.790405 }
}

const dataReducer = (state=initialState, action) => {

    switch(action.type) {
        case "SET_CACHE_DATA":
            return {
                ...state,
                cacheData: [...action.payload]
            }
        case "RESET_DISPLAY_DATA":
            return {
                ...state,
                displayData: [...state.cacheData]
            }
        case 'SET_DISPLAY_DATA':
            return {
                ...state,
                displayData: [...action.payload]
            }
        case "SET_DATA_LOADED":
            return {
                ...state,
                dataLoaded: action.payload
            }
        case "SET_PRODUCT_DATA":
            return {
                ...state,
                productData: {...action.payload}
            }
        case "SET_PREMISE_FILTER":
            return {
                ...state,
                premiseFilter: action.payload
            }
        case "FILTER_DISPLAY_DATA":
            return {
                ...state,
                displayData: [...state.cacheData.filter(account => {
                    if (account.unique_orders.some(order => {
                        return order.product_id === state.productFilter.id
                    })) {
                        return account
                    }
                })]
            }
        case "SET_PRODUCT_FILTER":
            return {
                ...state,
                productFilter: action.payload
            }
        case "SET_MAP_CENTER":
            return {
                ...state,
                mapCenter: {...action.payload},
                userLocation: {...action.payload}
            }
        default:
            return state;
    }

}
export default dataReducer