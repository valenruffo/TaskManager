import React from "react";
import Tasks from "../Tasks/Tasks";
import { useGetTasksQuery } from "../../ReduxToolkit/taskSlice";
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'
import "./LandingPage.css";

const LandingPage = () => {
 
  return (
    <div>
      <div className="pages-container">
        <Tasks tasks={useGetTasksQuery()} />
      </div>
      <ScrollToTopButton/>
    </div>
  );
};

export default LandingPage;
