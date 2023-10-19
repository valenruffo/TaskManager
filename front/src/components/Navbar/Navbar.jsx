import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CreateTask from "../../pages/Create/CreateTask";

const Navbar = () => {
  return (
    <div className="nav-container">
      <CreateTask/>
    
    </div>
  );
};

export default Navbar;
