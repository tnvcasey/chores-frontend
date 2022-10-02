import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "200px",
    padding: "10px",
    margin: "6px 3px",
    background: "ivory",
    color: "black"
  }; 

  function NavBar() {
    return (
        <div>
            <ul className="horizontal-list">
                <li><NavLink to="/" style={linkStyles}>HOME</NavLink></li>
                <li><NavLink to="/chores" style={linkStyles}>CHORES</NavLink></li>
                <li><NavLink to="/rooms" style={linkStyles}>ROOMS</NavLink></li>
            </ul>
        </div>
  )}

export default NavBar; 

