import React, { useEffect } from "react";
import Tasks from "../Tasks/Tasks";
import { useGetTasksQuery } from "../../ReduxToolkit/taskSlice";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import "./LandingPage.css";

const LandingPage = () => {
  const { data: tasks, refetch } = useGetTasksQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div>
      <div className="pages-container">
        <Tasks tasks={tasks} />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default LandingPage;
