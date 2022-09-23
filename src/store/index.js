import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers/allReducers";

import thunk from "redux-thunk";

const middleWares = [thunk];

const store = createStore(allReducers, applyMiddleware(...middleWares));
export default store;

