// Combine
import { combineReducers } from "redux";

// Reducers
import itemReducer from "./itemReducer";
import parentsReducer from "./parentReducer";
import authReducer from "./authReducer";
import errorReducer from "./errors";
import studentReducer from "./studentReducer";
import orderReducer from "./orderReducer";
// Combining the reducers
export default combineReducers({
  auth: authReducer,
  errorReducer: errorReducer,
  studentReducer: studentReducer,
  parentsReducer: parentsReducer,
  itemReducer: itemReducer,
  orderReducer: orderReducer
});
