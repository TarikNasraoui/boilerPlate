import axios from "axios";
import { taskURL, addtaskURL } from "../config/api";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const getTasks = () => {
  return axios.get(taskURL).then((res) => res.data);
};

export const addTask = (data) => {
  return axios.post(addtaskURL, data, config).then((res) => res.data.task);
};
