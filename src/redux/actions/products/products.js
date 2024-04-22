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

export const get_product_list_page = (page) => async dispatch =>{
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
        console.log(error);
        dispatch({
            type: GET_PRODUCT_LIST_FAIL
        })
    }
}

export const get_product_list = () => async dispatch =>{
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
            
        }else{
            dispatch({
                type: GET_PRODUCT_LIST_FAIL
            });
        }
    }catch(error){
        console.log(error)
        dispatch({
            type: GET_PRODUCT_LIST_FAIL
        })
    }
}


export const get_product_list_category = (slug, page) => async dispatch =>{
    const config ={
        headers: {
            'Accept': 'application/json'
        }
    };
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/by_category?slug=${slug}&p=${page}`, config)
        if(res.status === 200){
            dispatch({
                type: GET_PRODUCT_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            })
           
        }else{
            dispatch({
                type: GET_PRODUCT_LIST_CATEGORIES_FAIL
            });
        }
    }catch(error){
        dispatch({
            type: GET_PRODUCT_LIST_CATEGORIES_FAIL
        })
    }
}


export const get_product = (slug) => async dispatch => {
    const config ={
        headers: {
            'Accept': 'application/json'
        }
    };
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/detail/${slug}`, config)
        if(res.status === 200){
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: res.data
            })
            console.log(res);
        }else{
            dispatch({
                type: GET_PRODUCT_FAIL
            });
        }
    }catch(error){
        dispatch({
            type: GET_PRODUCT_FAIL
        })
    }
}

export const get_product_list_category_page = (slug, page) => async dispatch =>{
    const config ={
        headers: {
            'Accept': 'application/json'
        }
    };
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/by_category?slug=${slug}&p=${page}`, config)
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
            type: GET_PRODUCT_LIST_CATEGORIES_FAIL
        })
    }
}


export const search_product = (slug) => async dispatch => {
    const config ={
        headers: {
            'Accept': 'application/json'
        }
    };
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/search?s=${slug}`, config)
        if(res.status === 200){
            dispatch({
                type: GET_SEARCH_PRODUCT_SUCCESS,
                payload: res.data
            })
            console.log(res);
        }else{
            dispatch({
                type: GET_SEARCH_PRODUCT_FAIL
            });
        }
    }catch(error){
        dispatch({
            type: GET_SEARCH_PRODUCT_FAIL
        })
    }
}

export const search_product_page = (slug, page) => async dispatch => {
    const config ={
        headers: {
            'Accept': 'application/json'
        }
    };
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/search?s=${slug}&p=${page}`, config)
        if(res.status === 200){
            dispatch({
                type: GET_SEARCH_PRODUCT_SUCCESS,
                payload: res.data
            })
            console.log(res);
        }else{
            dispatch({
                type: GET_SEARCH_PRODUCT_FAIL
            });
        }
    }catch(error){
        dispatch({
            type: GET_SEARCH_PRODUCT_FAIL
        })
    }
}