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

  function NavBar({ user, onLogout }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE", 
      }).then(() => onLogout());
    }
  
    return (
      <header>
        <div>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to="/signup" style={linkStyles}>Sign Up</Link>
              <Link to="/login" style={linkStyles}>Login</Link>
              <Link to="/members" style={linkStyles}>Family Members</Link>
              <Link to="/chores" style={linkStyles}>All Chores</Link>
            </>
          )}
        </div>
      </header>
    );
  }
  
  export default NavBar;
