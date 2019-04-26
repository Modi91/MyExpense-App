// ActionTypes

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
  filterItems:[],
  categories: [],
  item: {},
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS:
      return {
        ...state,
        items: action.payload.items,
        filterItems: action.payload.items,
        loading: false
      };
    case actionTypes.FILTER_ITEMS:
    if (action.payload === "All"){
      return {
        ...state,
        filterItems:state.items
      };
    }else{
      let fiterItemsObj = state.items.filter(item => item.category.name === action.payload)
      return {
        ...state,
        filterItems: fiterItemsObj
      };
    }
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload.schoolcategories
      };
    default:
      return state;
  }
};

export default reducer;
