const initialState = {
    displayData: [],
    dataLoaded: false
}

const dataReducer = (state=initialState, action) => {

    switch(action.type) {
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
        default:
            return state;
    }

}
export default dataReducer