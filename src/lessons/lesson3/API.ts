import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',

};
const key = '36f1ea85';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance(`?apikey=${key}&t=${title}`).then(resp => resp.data, err => console.log("Error: ", err))
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance(`?apikey=${key}&s=${title}&type=${type}`).then(resp => resp.data, err => console.log("Error: ", err))
    }
};


export default API;
