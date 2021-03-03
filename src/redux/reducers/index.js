import { counter, customAsyncData, postCustomAsyncData } from "./postReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  counter,
  postList: customAsyncData,
  postCreated: postCustomAsyncData,
});
export default rootReducer;
