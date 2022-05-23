import axios from "axios";
export const ALL_COUNTRIES = 'ALL_COUNTRIES';
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME';
export const GET_COUNTRY_ID = 'GET_COUNTRY_ID';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const CLEAR = 'CLEAR';

const API_URL = 'http://localhost:3001'

export function allCountries() {
    return async (dispatch) => {
        await axios.get(`${API_URL}/countries`)
        .then(result => {
            return dispatch({
                type: ALL_COUNTRIES,
                payload: result.data // action.payload es la informacion que devuelvo aca
            })
        })
    }
}

export function countryByName(name) {
    return async (dispatch) => {
        await axios.get(`${API_URL}/countries?name=${name}`).then(result => {
            return dispatch({
                type: GET_COUNTRY_NAME,
                payload: result.data
            })
        }).catch((e) => {
            console.log(e)
        })
    }
}

export function countryById(id) {
    return async (dispatch) => {
        await axios.get(`${API_URL}/countries/${id}`)
        .then(result => {
            return dispatch({
                type:GET_COUNTRY_ID,
                payload:result.data
            })
        })
    }
}

export function createActivity(activity) {
    return async (dispatch) => {
        await axios.post(`${API_URL}/activity`, activity).then(result =>{
            return dispatch({
                type: CREATE_ACTIVITY,
                payload: result
            })
        })
    }
} 

export function clear() {
    return (dispatch) => {
        return dispatch({
            type: CLEAR,
            payload: [],
        })
    }
}