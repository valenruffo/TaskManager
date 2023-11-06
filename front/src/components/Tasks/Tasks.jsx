import React, { useState } from "react";
import "./Tasks.css";
import Task from "../Task/Task";
import { useGetTasksQuery } from "../../ReduxToolkit/taskSlice";

const Tasks = () => {
  const { data: tasks, isError, isLoading } = useGetTasksQuery();

  const [pinnedTasks, setPinnedTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handlePin = (id) => {
    const isCurrentlyPinned = pinnedTasks.find((task) => task.id === id);

    if (isCurrentlyPinned) {
      setPinnedTasks(pinnedTasks.filter((task) => task.id !== id));
      setErrorMessage(null);
    } else {
      if (pinnedTasks.length >= 3) {
        setErrorMessage("Solo puedes pinear un máximo de 3 tareas.");
        return;
      }

      const taskToPin = tasks.find((task) => task.id === id);
      setPinnedTasks([...pinnedTasks, taskToPin]);
      setErrorMessage(null);
    }
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  } else if (isError) {
    return <div className="error-loading">error database</div>;
  }

  const handleDelete = (id) => {
    // Actualiza el estado de pinnedTasks para eliminar la tarea
    setPinnedTasks(pinnedTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="tasks-container">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {pinnedTasks.map((task) => (
        <Task
          id={task.id}
          key={task.id}
          title={task.title}
          isPinned
          onPin={handlePin}
          onDelete={handleDelete}
        />
      ))}
      {tasks
        .filter((task) => !pinnedTasks.includes(task))
        .map((task) => (
          <Task
            id={task.id}
            key={task.id}
            title={task.title}
            onPin={handlePin}
            onDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export default Tasks;
