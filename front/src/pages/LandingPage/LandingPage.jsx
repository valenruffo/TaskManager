import React, { useEffect, useState } from "react";
import Tasks from "../../components/Tasks/Tasks";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, deleteTask } from "../../Redux/Actions";
import "./LandingPage.css";

const LandingPage = () => {
  const dispatch = useDispatch();
  const ITEMS_PER_PAGE = 3;
  const allTasks = useSelector((state) => state.allTasks);
  const [currentPage, setCurrentPage] = useState(0);

  const getPaginatedTasks = () => {
    const firstIndex = currentPage * ITEMS_PER_PAGE;
    const lastIndex = firstIndex + ITEMS_PER_PAGE;
    return allTasks.slice(firstIndex, lastIndex);
  };

  const nextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage * ITEMS_PER_PAGE < allTasks.length) {
      setCurrentPage(nextPage);
    }
  };

  const prevPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 0) {
      setCurrentPage(prevPage);
    }
  };

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const handleDeleteTask = async (taskId) => {
    await dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <div className="buttons-container">
        <button onClick={prevPage}>⬅</button>
        <button onClick={nextPage}>➡</button>
      </div>
      <div className="pages-container">
        <Tasks allTasks={getPaginatedTasks()} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
};

export default LandingPage;

