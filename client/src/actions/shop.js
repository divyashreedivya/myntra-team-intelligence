import {
    GET_PRODUCTS,
    GET_PRODUCT,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCT_GROUPS_FAIL,
    GET_PRODUCT_GROUPS,
    GET_PRODUCT_GROUP
} from "./types";

import ShopService from "../services/shop.service";

export const getProducts = ()=>
    async(dispatch)=>{
        try{
            const res = await ShopService.getProducts();
            console.log(res);
            dispatch({
                type:GET_PRODUCTS,
                payload:res
            })
        }
        catch(err){
            console.log(err);
        }
    }

export const getProduct = (id)=>
    async(dispatch)=>{
        try{
            const res = await ShopService.getProduct(id);
            dispatch({
                type:GET_PRODUCT,
                payload:res
            })
        }
        catch(err){
            console.log(err);
        }
    }

export const addProduct = ()=>
    async(dispatch)=>{
        try{
            const res = await ShopService.addProduct();
            dispatch({
                type:ADD_PRODUCT,
                payload:res
            })
        }
        catch(err){
            console.log(err);
        }
    }

export const editProduct = (id)=>
    async(dispatch)=>{
        try{
            const res = await ShopService.editProduct(id);
            dispatch({
                type:EDIT_PRODUCT,
                payload:res
            })
        }
        catch(err){
            console.log(err);
        }
}

export const deleteProduct = ()=>
    async(dispatch)=>{
        try{
            const res = await ShopService.deleteProduct();
            dispatch({
                type:DELETE_PRODUCT,
                payload:res[0]
            })
        }
        catch(err){
            console.log(err);
        }
}

export const getProductGroups = ()=>
    async(dispatch)=>{
        try{
            const res = await ShopService.getProductGroups();
            if(res){
                dispatch({
                    type:GET_PRODUCT_GROUPS,
                    payload:res
                })
            }
            else{
                dispatch({
                    type:GET_PRODUCT_GROUPS_FAIL,
                    payload:undefined
                })
            }
        }
        catch(err){
            dispatch({
                type:GET_PRODUCT_GROUPS_FAIL,
                payload:undefined
            })
        }
    }
export const getProductGroup = (id)=>
    async(dispatch)=>{
        try{
            const res = await ShopService.getProductGroup(id);
            dispatch({
                type:GET_PRODUCT_GROUP,
                payload:res
            })
        }
        catch(err){
            console.log(err);
        }
    }