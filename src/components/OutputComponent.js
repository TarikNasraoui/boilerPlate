import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddTask } from "./AddTask";
import allActions from "../redux/actions/postAction";

const OutputComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const postList = useSelector((state) => state.postList);
  const { loading, posts, error } = postList;
  useEffect(() => {
    dispatch(allActions.getAsyncData());
  }, [dispatch]);
  return (
    <div>
      {counter}

      {loading ? (
        <p>loading....</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <tr key={i}>
                  <td>{post.title}</td>
                  <td>{post.completed ? "completed" : "not completed"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <AddTask />
        </>
      )}
    </div>
  );
};
export default OutputComponent;
