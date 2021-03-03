import {
  SET_DATA,
  SET_DATA_REQUESTED,
  SET_DATA_FAILED,
  POST_DATA,
  POST_CREATE_REQUEST,
  POST_CREATE_FAIL,
} from "../constants/postConstant";
const counter = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
const customAsyncData = (state = { posts: [] }, action) => {
  switch (action.type) {
    case SET_DATA_REQUESTED:
      return { loading: true, posts: [] };
    case SET_DATA:
      return { loading: false, posts: action.payload };
    case SET_DATA_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const postCustomAsyncData = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return { loading: true };

    case POST_DATA:
      return { loading: false, success: true, posts: action.payload };
    case POST_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export { counter, customAsyncData, postCustomAsyncData };
