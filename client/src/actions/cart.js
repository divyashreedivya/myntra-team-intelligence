import {
    GET_CART_GROUP,
    GET_CART_GROUPS,
    CREATE_CART_GROUP,
    ADD_USER_CART_GROUP,
    ADD_PRODUCT_CART_GROUP
} from "./types";

import CartService from "../services/cart.service";

export const getCartGroups = ()=>
    async(dispatch)=>{
        try{
            console.log('Get cart gorups');
            const res = await CartService.getCartGroups();
            console.log(res);
            dispatch({
                type:GET_CART_GROUPS,
                payload:res
            })
        }
        catch(err){
            console.log(err);
        }
    }

export const getCartGroup = (id)=>
    async(dispatch)=>{
        try{
            console.log('Gte cart');
            const res = await CartService.getCartGroup(id);
            console.log(res);
            dispatch({
                type:GET_CART_GROUP,
                payload:res
            })
        }
        catch(err){
            console.log(err);
        }
    }


export const createCartGroup = (name)=>
async(dispatch)=>{
    try{
        const res = await CartService.createCartGroup(name);

        dispatch({
            type:CREATE_CART_GROUP,
            payload:res
        })
    }
    catch(err){
        console.log(err);
    }
}

export const addUserCartGroup = (id,email)=>
async(dispatch)=>{
    try{
        const res = await CartService.addUserCartGroup(id,email);
        dispatch({
            type:ADD_USER_CART_GROUP,
            payload:res
        })
    }
    catch(err){
        console.log(err);
    }
}

export const addProductCartGroup = (id)=>
async(dispatch)=>{
    try{
        const res = await CartService.addProductCartGroup();
        dispatch({
            type:ADD_PRODUCT_CART_GROUP,
            payload:res
        })
    }
    catch(err){
        console.log(err);
    }
}