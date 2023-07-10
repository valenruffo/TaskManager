import React from "react";
import "./Task.css";
import { useDeleteTaskMutation } from "../../ReduxToolkit/taskSlice";

const Task = ({ id, title, description }) => {
  const [deleteTask] = useDeleteTaskMutation();
  return (
    <div className="task-container" key={id}>
      <div className="task-title">
        <h2>{title}</h2>
      </div>
      <div className="task-description">
        <h4>{description}</h4>
      </div>
      <button onClick={() => deleteTask(id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default Task;
