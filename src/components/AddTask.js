import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/actions/postAction";
export const AddTask = () => {
  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      allActions.postAsyncData({
        title,
        isCompleted: isCompleted ? "true" : "false",
      })
    );
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="checkbox"
          value={isCompleted}
          onChange={(e) => setIsCompleted(!isCompleted)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
