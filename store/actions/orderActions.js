import axios from "axios";
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  //   baseURL: "http://127.0.0.1:8000/api/"
  baseURL: "http://192.168.1.33:80/api/"
});

export const order = studentId => {
  console.log("TCL: studentId", studentId);
  return async dispatch => {
    try {
      const res = await instance.post(`create/${studentId}/order/`);
      const order = res.data;
      console.log("TCL: order", order);
      dispatch({
        type: actionTypes.CREATE_ORDER,
        payload: order
      });
    } catch (error) {
      console.log("Somthing went wrong with ", error);
    }
  };
};

export const addToCart = (orderId, itemObj, quantity) => {
  console.log("addToCart action -> quantity", quantity);
  console.log("addToCart action -> itemObj", itemObj);
  console.log("addToCart action -> orderId", orderId);
  let cartItem = { item: itemObj.id, quantity: quantity };
  return async dispatch => {
    try {
      const res = await instance.post(`cartItem/${orderId}/create/`, cartItem);
      const item = res.data;
      console.log("addToCart action -> item = res.data", item);
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: { item: itemObj, quantity: quantity }
      });
      dispatch(retrieveOrder(orderId));
    } catch (error) {
      console.log("Somthing went wrong with ", error);
    }
  };
};

export const retrieveOrder = orderId => {
  console.log("retrieve order action orderId", orderId);
  return async dispatch => {
    try {
      const res = await instance.get(`order/${orderId}/`);
      const order = res.data;
      console.log("retrieve order action order ---> ", order);
      dispatch({
        type: actionTypes.RETRIEVE_ORDER,
        payload: order
      });
    } catch (error) {
      console.log("Somthing went wrong with ", error);
    }
  };
};

export const removeItemFromCart = (itemId, orderId) => {
  //   type: actionTypes.REMOVE_ITEM_FROM_CART,
  //   payload: itemId
  // });
  return async dispatch => {
    try {
      dispatch({
        type: actionTypes.REMOVE_ITEM_FROM_CART,
        payload: itemId
      });
      //   dispatch(retrieveOrder(orderId));
    } catch (error) {
      console.log("Somthing went wrong with ", error);
    }
  };
};

export const checkout = orderId => {
  console.log("checkout action", orderId);
  return async dispatch => {
    try {
      const res = await instance.post(`checkout/${orderId}/`);
      const checkout = res.data;
      console.log("action checkout ---> ", checkout);
      dispatch({
        type: actionTypes.CHECKOUT,
        payload: checkout
      });
    } catch (error) {
      console.log("Somthing went wrong with ", error);
    }
  };
};
