import beerApi from "../api/beerApi";

const SET_Beers_DATA = 'SET_Beers_DATA'
const SET_BEER_DATA = 'SET_BEER_DATA'

let initialState = {
    pageNumber: 1,
    beersInfo: [],
    oneBeer: null,
}

const beerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_Beers_DATA:
            return {
                ...state,
                beersInfo: action.payload.data,
            }
            case SET_BEER_DATA:

            return {
                ...state,
                oneBeer: action.payload.data[0],
            }
        default:
            return state;
    }
}

export const setBeersData = (beersInfo) => ({type: SET_Beers_DATA, payload:beersInfo})
export const setBeerData = (beerInfo) => ({type: SET_BEER_DATA, payload:beerInfo})

export const getBeersData = (name = "") => async (dispatch, getState) => {
    let response = null
    if(name === ""){
        response = await beerApi.getListBeers(getState().beer.pageNumber)
    }else{
        response = await beerApi.getOneBeerByName(name)
    }
    dispatch(setBeersData(response))
}
export const getOneBeer = (id) => async (dispatch) => {
    let response = await beerApi.getOneBeerById(id)

    dispatch(setBeerData(response))
}

export default beerReducer
