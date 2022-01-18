import {
     GET_AUTH_USER,
     GET_AUTH_USER_FAILED,
     GET_AUTH_USER_SUCCESS, 
     GET_PROFILE,
     GET_PROFILE_SUCCESS,
     GET_PROFILE_FAILED,
     LOGOUT,
     USER_LOGIN, 
     USER_LOGIN_FAILED,
     USER_LOGIN_SUCCESS,
     USER_REGISTER, 
     USER_REGISTER_FAILED,
     USER_REGISTER_SUCCESS,
     EDIT_USER,
     EDIT_USER_SUCCESS,
     EDIT_USER_FAILED, 
    
    } from "../actionsTypes/userActionsTypes";

const initialState = {
    loading : false,
    msg : null,
    errors : null,
    isAuth  : false,
    user: null,
    token: localStorage.getItem("token"),
};

const userReducer = (state = initialState, {type , payload}) =>{
    switch(type){
       case USER_LOGIN :
       case USER_REGISTER :
       case GET_AUTH_USER :
       case GET_PROFILE:
       case EDIT_USER:              
       return {
           ...state,
           loading: true,
       } 
       case USER_REGISTER_SUCCESS:
           return {
               ...state,
               loading: false,
               msg : payload,
               isAuth: true,
           }
        case GET_AUTH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user : payload,
                isAuth: true,
            }
        case USER_LOGIN_SUCCESS :
          // localStorage.setItem("token", payload.token);
             return {
           ...state,
           loading : false,
           msg : payload,
           errors: null,
           isAuth : true,
       }
       case EDIT_USER_SUCCESS:
         return {
           ...state,
           loading: false,
           msg: payload,
         }
       case USER_REGISTER_FAILED:
       case USER_LOGIN_FAILED :
       case GET_AUTH_USER_FAILED:    
             return {
           ...state,
           loading : false,
           isAuth : false,
           errors : payload,
       };
       case GET_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuth: true,
          user: payload,
        };
  
      case GET_PROFILE_FAILED:
        return {
          ...state,
          loading: false,
          errors: payload,
        };

        case EDIT_USER_FAILED:
          return {
            ...state,
            loading: false,
            msg: payload,
          };

       case LOGOUT:
         localStorage.removeItem("token");
         return {
             ...state,
             isAuth: false,
         }
        default: return state;
    }
}

export default userReducer;