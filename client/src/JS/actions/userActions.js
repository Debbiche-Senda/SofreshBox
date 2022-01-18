import axios from 'axios';
import { EDIT_USER, EDIT_USER_FAILED, EDIT_USER_SUCCESS, USER_REGISTER, USER_REGISTER_FAILED, USER_REGISTER_SUCCESS } from "../actionsTypes/userActionsTypes"
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from '../actionsTypes/userActionsTypes';
import {LOGOUT} from "../actionsTypes/userActionsTypes";
import { GET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILED} from '../actionsTypes/userActionsTypes';
import { GET_AUTH_USER, GET_AUTH_USER_SUCCESS, GET_AUTH_USER_FAILED } from '../actionsTypes/userActionsTypes';




/******************** User register action creator ********************** */


export const userRegister = (payload) => async (dispatch) =>{
    dispatch({type : USER_REGISTER});
    try {
        const res = await axios.post("/api/user/register", payload)

        dispatch({type : USER_REGISTER_SUCCESS, payload: res.data.msg})
    } catch (error) {
        console.log("register error", error)
        dispatch({type : USER_REGISTER_FAILED, payload: error.res})
    }
}


/******************** User Login action creator ********************** */

export const userLogin = (payload) => async (dispatch) => {
    dispatch({ type: USER_LOGIN });
  
    try {
      const res = await axios.post("api/user/login", payload);
      localStorage.setItem("token" , res.data.token)
      console.log("token",res.data.token)
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.token });
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAILED, payload: error.res.data.msg });
    }
  };


/******************** Get profile action creator ********************** */

export const getProfile = (_id) => async (dispatch) => {
  dispatch({ type: GET_PROFILE });

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.get("api/user/current-user", config);

    dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
  } catch (error) {
    console.log("Get profile error", error);
    dispatch({ type: GET_PROFILE_FAILED, payload: error.res });
  }
};

/******************** User Logout action creator ********************** */

export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.clear();

};

/******************** User Auth action creator ********************** */
export const getAuthUser = () => async (dispatch) => {
  dispatch({
    type: GET_AUTH_USER,
  });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.get("/api/user/current-user", config);
    dispatch({
      type: GET_AUTH_USER_SUCCESS,
      payload: res.data, //{user:req.user}
    });
  } catch (error) {
    console.dir(error.response);
    dispatch({
      type: GET_AUTH_USER_FAILED,
      payload: error.response.data,
    });
  }
};

//***************************Edit user action creator************************* */
export const editUser = (id, editUser) => async (dispatch) => {
  dispatch({ type: EDIT_USER });

  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };


  try {
    const res = await axios.put(`/api/user/editUser/${id}`, editUser , config);

    dispatch({ type: EDIT_USER_SUCCESS, payload: res.data });
    // dispatch(getProfile());
  } catch (error) {
    console.log("edit error" , error);
    dispatch({ type: EDIT_USER_FAILED, payload: error.response.data });
  }
};