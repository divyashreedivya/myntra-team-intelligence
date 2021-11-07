import { GET_USER } from "./types";
import UserService from "../services/user.service";

export const getUser = ()=>{
    return(dispatch)=>{
    return UserService.getUser().then(
        (response)=>{
            // console.log('getUser action');
            // console.log(response);
            dispatch({
                type:GET_USER,
                payload: response
            });
        }
    )
    };
}