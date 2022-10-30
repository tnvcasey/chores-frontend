import React from "react";
import { Link } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "200px",
    padding: "10px",
    margin: "6px 3px",
    background: "ivory",
    color: "black"
  }; 

  function NavBar({ user, handleLogout }) {
    function onLogout() {
      fetch("/logout", {
        method: "DELETE", 
      }).then(() => handleLogout());
    }
  
    return (
      <header>
        <div>
          {user ? (
            <div>
              <Link to="/members" style={linkStyles}>Family Members</Link>
              <Link to="/chores" style={linkStyles}>All Chores</Link>
              <button onClick={onLogout}>Logout</button>
            </div>
          ) : (
            <>
              <Link to="/signup" style={linkStyles}>Sign Up</Link>
              <Link to="/login" style={linkStyles}>Login</Link>
            </>
          )}
        </div>
      </header>
    );
  }
  
  export default NavBar;
