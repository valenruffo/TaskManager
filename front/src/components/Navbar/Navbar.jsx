import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="links-container">
        <Link to={"/tasks"}>Tasks</Link>
        <Link to={"/create"}>NewTask</Link>
      </div>
    </div>
  );
};

export default Navbar;
