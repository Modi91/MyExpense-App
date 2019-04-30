import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";

import * as actionTypes from "./actionTypes";
// import { setErrors } from "./errors";

const instance = axios.create({
  //   baseURL: "http://127.0.0.1:8000/api/"
  //   baseURL: "http://192.168.8.101:80/api"

  baseURL: "http://172.20.10.2:30/api/"
});
/* -- set Token to brow -- */
const setAuthToken = token => {
  if (token) {
    AsyncStorage.setItem("token", token);
    //this line will put the token in the code format
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    AsyncStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};
/* -- check for expired token -- */
export const checkForExpiredToken = () => {
  return async dispatch => {
    // Get token
    const token = await AsyncStorage.getItem("token");
    console.log("token ===>", token);

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        setAuthToken(token);
        // Set user
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};
/* -- login from api -- */
export const login = (userData, navigation) => {
  return async dispatch => {
    try {
      let response = await instance.post("school/login/", userData);
      let user = response.data;
      console.log("TCL: login -> user", user);
      let decodedUser = jwt_decode(user.token);
      setAuthToken(user.token);
      await dispatch(setCurrentUser(decodedUser));
      navigation.replace("HomeScanPage");
    } catch (error) {
      console.error(error);
    }
  };
};
/* -- signup from api -- */
export const signup = userData => {
  return async dispatch => {
    try {
      let response = await instance.post("register/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.token);
      setAuthToken(user.token);
      dispatch(setCurrentUser(decodedUser));
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: []
      });
    } catch (error) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: error.response.data
      });
    }
  };
};

//will delete the whole user obj
export const logout = () => {
  setAuthToken();
  navigation.navigate("Login");
  return setCurrentUser();
};
/* -- set current user to see -- */
const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
