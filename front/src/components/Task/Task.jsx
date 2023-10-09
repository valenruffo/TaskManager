import React from "react";
import "./Task.css";
import { useDeleteTaskMutation } from "../../ReduxToolkit/taskSlice";

const Task = ({ id, title, description }) => {
  const [deleteTask] = useDeleteTaskMutation();
  return (
    <div className="task-container">
      <div className="task-title">
        <h2>{title}</h2>
      </div>
      <div className="task-description">
        <h4>{description}</h4>
      </div>
      <button className="delete-btn" onClick={() => deleteTask(id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
