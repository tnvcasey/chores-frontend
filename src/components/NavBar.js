import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "center",
    width: "200px",
    padding: "10px",
    margin: "6px 3px",
    background: "beige",
    color: "black"
  }; 

  function NavBar() {
    return (
        <div>
            <ul className="horizontal-list">
                <li><NavLink to="/" style={linkStyles}>Chore List</NavLink></li>
                <li><NavLink to="/members/new" style={linkStyles}>Add a Family Member</NavLink></li>
                <li><NavLink to="/chores/new" style={linkStyles}>Add a Chore</NavLink></li>
                <li><NavLink to="/rooms/new" style={linkStyles}>Add a Room</NavLink></li>
            </ul>
        </div>
  )}

export default NavBar; 