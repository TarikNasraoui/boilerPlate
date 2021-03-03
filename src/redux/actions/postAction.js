import { GET_ASYNC_DATA, POST_ASYNC_DATA } from "../constants/postConstant";
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
const getAsyncData = () => {
  return {
    type: GET_ASYNC_DATA,
  };
};

const postAsyncData = (task) => {
  console.log(task);
  return {
    type: POST_ASYNC_DATA,
    task,
  };
};

export default { increment, decrement, getAsyncData, postAsyncData };
