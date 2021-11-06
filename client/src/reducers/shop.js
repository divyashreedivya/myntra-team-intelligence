import {
    GET_PRODUCTS,
    GET_PRODUCT,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCTS_FAIL,
    GET_PRODUCT_GROUPS,
    GET_PRODUCT_GROUPS_FAIL,
    GET_PRODUCT_GROUP
} from "../actions/types";

const initialState = {
    products:[],
    product:{},
    productgroups:[],
    productgroup:{}
}

export default function(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case GET_PRODUCTS:
            return{
                ...state,
                products:payload,
            }
        case GET_PRODUCTS_FAIL:
            return{
                ...state,
                products:payload,
            }
        case GET_PRODUCT:
            return{
                ...state,
                product:payload
            }
        case ADD_PRODUCT:
            return{
                ...state,
                product:payload
            }
        case EDIT_PRODUCT:
            return{
                ...state,
                product:payload
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                product:payload
            }
        case GET_PRODUCT_GROUPS:
            return{
                ...state,
                groupproducts:payload
            }
        case GET_PRODUCT_GROUPS_FAIL:
            return{
                ...state,
                groupproducts:payload
            }
        case GET_PRODUCT_GROUP:
            return{
                ...state,
                groupproduct:payload
            }
        default:
            return state
    }
}