import { combineReducers } from "redux";
import postReducer from "./fetchReducer";

const allReducers = combineReducers({
  data: postReducer,
});

export default allReducers;
