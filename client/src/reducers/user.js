import { GET_USER } from '../actions/types';

const initialState = {
    userData:{}
}

export default function(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case GET_USER:
            console.log(payload);
            return{
                ...state,
                userData: payload
            }
        default:
            return state;
            
    }
}