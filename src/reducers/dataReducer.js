

const initialState = {
    cacheData: [],
    displayData: [],
    productData: {},
    dataLoaded: false,
    productFilter: null
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
        default:
            return state;
    }

}
export default dataReducer