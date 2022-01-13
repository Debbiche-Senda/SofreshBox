import { ADD_PRODUCT, ADD_PRODUCT_FAILED, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT, DELETE_PRODUCT_FAILED, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT, EDIT_PRODUCT_FAILED, EDIT_PRODUCT_SUCCESS, GET_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS } from "../actionsTypes/adminActionsTypes"





const initialState = {

    loading : false,
    isAdmin : false,
    products : null,
    product : {},
    errors : null,
}

const adminReducer = (state = initialState , {type , payload}) => {

    switch(type){
        case GET_PRODUCTS:
        case ADD_PRODUCT:
        case EDIT_PRODUCT:
        case DELETE_PRODUCT:
             return {
            ...state,
            loading: true,
                }  
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                isAdmin: true,
                products: payload,
                errors: null,
                }
        case GET_PRODUCT:
                return {
                  ...state,
                  product: payload,
                }
        case ADD_PRODUCT_SUCCESS:
        case EDIT_PRODUCT_SUCCESS:
        case DELETE_PRODUCT_SUCCESS:
                 return {
                  ...state,
                  loading: false,
                  isAdmin: true,
                  msg : payload,
                  errors: null,
                }
        case GET_PRODUCTS_FAILED:        
        case ADD_PRODUCT_FAILED:
        case EDIT_PRODUCT_FAILED:
        case DELETE_PRODUCT_FAILED:
                return {
                    ...state,
                    loading: false,
                    isAdmin: false,
                    errors: payload,
                }                         
        default : return state
    }
}

export default adminReducer