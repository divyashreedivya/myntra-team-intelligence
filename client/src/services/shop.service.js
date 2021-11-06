import axios from "axios";


const API_URL = "http://localhost:8000/products/";

class ShopService{
    getProducts(){
        return axios.get(API_URL)
        .then((resp)=>{
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    getProduct(id){
        return axios.get(API_URL+id)
        .then((resp)=>{
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    addProduct(){
        return axios.post(API_URL)
        .then((resp)=>{
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    editProduct(id){
        return axios.put(API_URL+id)
        .then((resp)=>{
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    deleteProduct(id){
        return axios.delete(API_URL+id)
        .then((resp)=>{
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    getProductGroups(){
        return axios.get(API_URL+'groups')
        .then((resp)=>{
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    getProductGroup(id){
        return axios.get(API_URL+'groups/'+id)
        .then((resp)=>{
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    createProductGroup(){
        return axios.post(API_URL+'groups/')
        .then((resp)=>{
            return resp.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export default new ShopService();
