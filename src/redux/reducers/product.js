import {
    GET_PRODUCT_FAIL,
    GET_PRODUCT_LIST_CATEGORIES_FAIL,
    GET_PRODUCT_LIST_FAIL,
    GET_SEARCH_PRODUCT_FAIL,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_LIST_CATEGORIES_SUCCESS,
    GET_PRODUCT_LIST_SUCCESS,
    GET_SEARCH_PRODUCT_SUCCESS
} from '../actions/products/types';

const initialState ={
    product_list: null,
    product_list_category: null,
    filtered_products: null,
    product: null,
    count: null,
    next: null,
    previous: null
};

export default function products(state = initialState, action){
    const { type, payload} = action;

    switch(type){
        case GET_PRODUCT_LIST_SUCCESS:
            return{
                ...state,
                product_list: payload.results,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
        case GET_PRODUCT_LIST_FAIL:
            return{
                ...state,
                product_list: null,
                count: null,
                next: null,
                previous: null,
            }
        case GET_PRODUCT_LIST_CATEGORIES_SUCCESS:
                return{
                    ...state,
                    product_list_category: payload.results.products,
                    count: payload.count,
                    next: payload.next,
                    previous: payload.previous,
                }
        case GET_PRODUCT_LIST_CATEGORIES_FAIL:
                return{
                    ...state,
                    product_list_category: null,
                    count: null,
                    next: null,
                    previous: null,
                }
        case GET_SEARCH_PRODUCT_SUCCESS:
            return{
                ...state,
                filtered_products: payload.results.filtered_products,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
        case GET_SEARCH_PRODUCT_FAIL:
            return{
                ...state,
                filtered_products: null,
                count: null,
                next: null,
                previous: null,
            }
        case GET_PRODUCT_SUCCESS:
            return{
                ...state,
                product: payload.product,
            }
        case GET_PRODUCT_FAIL:
            return{
                ...state,
                product: null,
            }
        default: return state;
    }
}
