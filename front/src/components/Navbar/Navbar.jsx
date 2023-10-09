import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="links-container">
        <Link to={"/tasks"}>Tasks</Link>
        <Link to={"/create"}>➕</Link>
        <div className="login-container"></div>
      </div>
    </div>
  );
};

export default Navbar;
