import React from "react";
import "./Task.css";




const Task = ({ id, title, description, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="task-container" key={id}>
      <div className="task-title">
        <h2>{title}</h2>
      </div>
      <div className="task-description">
        <h4>{description}</h4>
      </div>
      <button onClick={handleDelete} className="delete-btn">
        delete
      </button>
    </div>
  );
};

export default Task;
