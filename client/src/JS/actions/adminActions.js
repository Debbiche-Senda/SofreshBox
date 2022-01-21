import axios from 'axios';
import {GET_PRODUCTS,
        GET_PRODUCTS_SUCCESS,
        GET_PRODUCTS_FAILED,
        GET_PRODUCT,
        ADD_PRODUCT,
        ADD_PRODUCT_SUCCESS,
        ADD_PRODUCT_FAILED,
        EDIT_PRODUCT,
        EDIT_PRODUCT_SUCCESS,
        EDIT_PRODUCT_FAILED,
        DELETE_PRODUCT,
        DELETE_PRODUCT_SUCCESS,
        DELETE_PRODUCT_FAILED
} from "../actionsTypes/adminActionsTypes"

/******************** Get products action creator ********************** */

export const getProducts = () => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS });
  
    try {
      const res = await axios.get("/api/order/getProducts");
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_FAILED, payload: error.response.data });
    }
  };

  /******************** Get product action creator ********************** */

  export const getProduct = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/order/${id}`);
  
      dispatch({ type: GET_PRODUCT, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  /******************** Add product action creator ********************** */

  export const addProduct = (newOrder) => async (dispatch) => {
    dispatch({ type: ADD_PRODUCT });
  
    try {
      const res = await axios.post("/api/order/add-product", newOrder);  
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
      dispatch(getProducts());
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_FAILED, payload: error.response.data });
      error.response.data.errors.map((err) => alert(err.msg));
    }
  };

  /******************** Edit/update products action creator ********************** */

  export const editProduct = (id, editProduct) => async (dispatch) => {
    dispatch({ type: EDIT_PRODUCT });
  
    try {
      const res = await axios.put(`/api/order/${id}`, editProduct);
  
      dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: res.data });
      // dispatch(getProducts());
    } catch (error) {
      dispatch({ type: EDIT_PRODUCT_FAILED, payload: error.response.data });
    }
  };

    /******************** Delete product action creator ********************** */

    export const deleteProduct = (id) => async (dispatch) => {
        dispatch({ type: DELETE_PRODUCT });
      
        try {
          const res = await axios.delete(`/api/order/${id}`);
      
          dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: res.data });
          // dispatch(getProducts());
        } catch (error) {
          dispatch({ type: DELETE_PRODUCT_FAILED, payload: error.response.data });
        }
      };
