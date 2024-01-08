import axios, { Axios } from "axios";
var backend = 'http://localhost:8000/categorias/api/v1/categorias/';

export const getAllCategorias = () => {
    return axios.get('http://localhost:8000/categorias/api/v1/categorias/');
}