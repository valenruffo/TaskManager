import React from "react";
import "./Tasks.css";
import Task from "../Task/Task";

const Tasks = ({ allTasks, onDeleteTask }) => {

  return (
    <div className="tasks-container">
      {allTasks.map((task) => ( 
        
        <Task
          key={task.id}
          id={task.id} 
          title={task.title}
          description={task.description}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
};




export default Tasks;
