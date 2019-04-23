// ActionTypes

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  order: {},
  cart: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ORDER:
      console.log("creat order reducer", action.payload);
      return {
        ...state,
        order: action.payload,
        loading: false
      };
    case actionTypes.ADD_TO_CART:
      console.log("action.payload addToCart reducer", action.payload);
      return {
        ...state,
        cart: state.cart.concat(action.payload)
      };

    case actionTypes.RETRIEVE_ORDER:
      console.log("retrieve order reducer", action.payload);

      return {
        ...state,
        order: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
