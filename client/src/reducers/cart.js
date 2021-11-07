import {
    GET_CART_GROUP,
    GET_CART_GROUPS,
    CREATE_CART_GROUP,
    ADD_USER_CART_GROUP,
    ADD_PRODUCT_CART_GROUP
} from "../actions/types";

const initialState = {
    cartgroups:[],
    cartgroup:{},
    cartgroupproducts:[],
    cartgroupusers:[]
}

export default function(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case GET_CART_GROUPS:
            return{
                ...state,
                cartgroups:payload
            }
        case GET_CART_GROUP:
            return{
                ...state,
                cartgroup:payload,
                cartgroupproducts:payload.products,
                cartgroupusers:payload.users 

            }
        case CREATE_CART_GROUP:
            return{
                ...state,
                cartgroup:payload
            }
        case ADD_USER_CART_GROUP:
            return{
                ...state,
                cartgroup:payload
            }
        case ADD_PRODUCT_CART_GROUP:
            return{
                ...state,
                cartgroup:payload
            }
        default:
            return state;
    }
}