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
  errors: errorReducer,
  studentReducer: studentReducer,
  parents: parentsReducer,
  items: itemReducer,
  orderReducer: orderReducer
});
