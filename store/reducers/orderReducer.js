// ActionTypes

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  order: {},
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        order: action.payload
      };
    case actionTypes.addToCart:
      let item = action.payload;
      let addedItem = state.cart.find(
        addedItem => addedItem.item.name === items.item.name
      );
      if (addedItem) {
        addedItem.quantity++;
        return {
          ...state,
          cart: [...state.cart]
        };
      } else {
        return {
          ...state,
          cart: state.cart.concat(action.payload)
        };
      }

    default:
      return state;
  }
};

export default reducer;
