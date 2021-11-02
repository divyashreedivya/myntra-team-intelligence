import axios from "axios";

const API_URL = "http://localhost:8000/users/getuser";

class UserService{
    getUser(){
        return axios
            .get(API_URL,{
                headers:{
                   Authorization :'Bearer '+ JSON.parse(localStorage.getItem("user"))
                }
            })
            .then((response)=>{
                console.log(response);
                return response.data;
            })
            .catch((err)=>{
                console.log(err);
            })
    }
}

export default new UserService();