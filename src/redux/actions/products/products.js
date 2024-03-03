import axios from "axios";
import {
    GET_PRODUCT_FAIL,
    GET_PRODUCT_LIST_CATEGORIES_FAIL,
    GET_PRODUCT_LIST_FAIL,
    GET_SEARCH_PRODUCT_FAIL,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_LIST_CATEGORIES_SUCCESS,
    GET_PRODUCT_LIST_SUCCESS,
    GET_SEARCH_PRODUCT_SUCCESS
} from './types';

export const get_producto_list_page = (page) => async dispatch =>{
    const config ={
        headers: {
            'Accept': 'application/json'
        }
    };
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/list?${page}`, config)
        if(res.status === 200){
            dispatch({
                type: GET_PRODUCT_LIST_SUCCESS,
                payload: res.data
            })
            console.log(res);
        }else{
            dispatch({
                type: GET_PRODUCT_LIST_FAIL
            });
        }
    }catch(error){
        dispatch({
            type: GET_CATEGORIES_FAIL
        })
    }
}

export const get_producto_list = () => async dispatch =>{
    const config ={
        headers: {
            'Accept': 'application/json'
        }
    };
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/list`, config)
        if(res.status === 200){
            dispatch({
                type: GET_PRODUCT_LIST_SUCCESS,
                payload: res.data
            })
            console.log(res);
        }else{
            dispatch({
                type: GET_PRODUCT_LIST_FAIL
            });
        }
    }catch(error){
        dispatch({
            type: GET_CATEGORIES_FAIL
        })
    }
}

export const get_producto_list_category = (slug) => async dispatch =>{
    const config ={
        headers: {
            'Accept': 'application/json'
        }
    };
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/by_category?slug=${slug}`, config)
        if(res.status === 200){
            dispatch({
                type: GET_PRODUCT_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            })
            console.log(res);
        }else{
            dispatch({
                type: GET_PRODUCT_LIST_CATEGORIES_FAIL
            });
        }
    }catch(error){
        dispatch({
            type: GET_CATEGORIES_FAIL
        })
    }
}
