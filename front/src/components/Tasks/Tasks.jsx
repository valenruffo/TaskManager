import React from "react";
import "./Tasks.css";
import Task from "../Task/Task";
import { useGetTasksQuery } from "../../ReduxToolkit/taskSlice";

const Tasks = () => {
  const { data: tasks, isError, isLoading} = useGetTasksQuery();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  } else if (isError) {
    return <div className="error-loading">error database</div>;
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
        </div>
      ))}
    </div>
  );
};

export default Tasks;
