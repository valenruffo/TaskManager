import React from "react";
import "./Task.css";

const Task = ({ id, title, description }) => {

  return (
    <div className="task-container" key={id}>
      <div className="task-title">
        <h2>{title}</h2>
      </div>
      <div className="task-description">
        <h4>{description}</h4>
      </div>
      
    </div>
  );
};

export default Task;
