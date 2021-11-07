import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/cart/";

class CartService{
    getCartGroups(){
        return axios.get(API_URL+"groups",{
            headers:authHeader()
        })
        .then((resp)=>{
            console.log(resp.data);
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    getCartGroup(id){
        return axios.get(API_URL+"groups/"+id,{
            headers:authHeader()
        })
        .then((resp)=>{
            console.log(resp);
            return resp.data
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    createCartGroup(name){
        return axios.post(API_URL+"groups",{name},{
            headers:authHeader()
        })
        .then((resp)=>{
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    addUserCartGroup(id,email){
        return axios.put(API_URL+"groups/"+id+"/user",{
            email
        },{
            headers:authHeader()
        })
        .then((resp)=>{
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    addProductCartGroup(id,productId){
        return axios.put(API_URL+"groups/"+id+"/product",{
            productId
        },{
            headers:authHeader()
        })
        .then((resp)=>{
            return resp.data
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export default new CartService();