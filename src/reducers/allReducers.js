import { combineReducers } from "redux";
import postReducer from "./fetchReducer";

const allReducers = combineReducers({
  user: postReducer,
});

export default allReducers;
