import axios from "axios";
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api"
});

export const order = studentId => {
  return async dispatch => {
    try {
      const res = await instance.post(`create/${studentId}/order/`);
      const item = res.data;
      dispatch({
        type: actionTypes.CREATE_ORDER,
        payload: item
      });
    } catch (error) {
      console.log("Somthing went wrong with ", error);
    }
  };
};

export const addToCart = (orderId, itemObj, quantity) => {
  return async dispatch => {
    try {
      const res = await instance.post(`cartItem/${orderId}/create/`);
      const item = res.data;
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: { item: itemObj, quantity: quantity }
      });
    } catch (error) {
      console.log("Somthing went wrong with ", error);
    }
  };
};
