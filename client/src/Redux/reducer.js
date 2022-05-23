import {ALL_COUNTRIES, 
        GET_COUNTRY_ID ,
        GET_COUNTRY_NAME ,
        CREATE_ACTIVITY ,
        CLEAR } from "./actions";

const initialState = {
    countries: [],
    detail: [],
}

const rootReducer = (state = initialState,action) => {
    switch (action.type) {
        case ALL_COUNTRIES: 
            return {
                ...state,
                countries: action.payload
            }
    
        case GET_COUNTRY_NAME: 
            return {
                ...state,
                countries: action.payload
            }

        case GET_COUNTRY_ID: 
            return {
                ...state,
                detail: action.payload
            }
        case CREATE_ACTIVITY:
            return {
                ...state
            }

        case CLEAR:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return {...state}
    }
}

export default rootReducer;