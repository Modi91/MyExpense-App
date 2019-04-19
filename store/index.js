// Redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// Reducer
import rootReducer from "./reducers";

// React DevTools

// Creating the store
const middlewares = [thunk];
const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

export default store;
