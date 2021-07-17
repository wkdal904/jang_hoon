import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from '../_actions/types';

export default function(state={}, action){

    switch (action.type) {
        case LOGIN_USER:
                return{...state, loginSuccess: action.payload}
                //...은 위의 파라미터의 상태를 그대로 가져오는것
                break;
        case REGISTER_USER:
                return{...state, register: action.payload}
                break;
        case AUTH_USER:
                return{...state, userData: action.payload}
                break;
                
        default:
            return state;
    }
}