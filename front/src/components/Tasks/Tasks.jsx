import React from "react";
import "./Tasks.css";
import Task from "../Task/Task";
import { useGetTasksQuery } from "../../ReduxToolkit/taskSlice";
import { useDeleteTaskMutation } from "../../ReduxToolkit/taskSlice";

const Tasks = () => {
  const [deleteTask] = useDeleteTaskMutation();
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();

  if (isLoading) {
    return <div className="loading" >Loading...</div>;
  } else if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <div>
         <Task
         id={task.id}
          key={task.id}
          title={task.title}
          description={task.description}
        />
        <button onClick={() => deleteTask(task.id)} className="delete-btn">
        Delete
      </button>
        
        </div>
       
      ))}
    </div>
  );
};

export default Tasks;
