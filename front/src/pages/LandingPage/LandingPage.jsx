import React from "react";
import Tasks from "../../components/Tasks/Tasks";
import { useGetTasksQuery } from "../../ReduxToolkit/taskSlice";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <div className="pages-container">
        <Tasks tasks={useGetTasksQuery()} />
      </div>
    </div>
  );
};

export default LandingPage;
