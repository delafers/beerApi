import axios from "axios";

const baseApi = "https://api.punkapi.com/v2/"

const beerApi ={
    getListBeers(pageNumber) {
        return axios.get(`${baseApi}beers?page=${pageNumber}&per_page=50`)
    },
    getOneBeerById(id){
        return axios.get(`${baseApi}beers/${id}`)
    },
    getOneBeerByName(name){
        return axios.get(`${baseApi}beers?beer_name=${name}`)
    },

}
export default beerApi
