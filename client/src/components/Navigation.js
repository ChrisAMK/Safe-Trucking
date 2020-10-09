import React from "react";
import { Link } from "react-router-dom";

// Navigation component is the Navigation bar at the top of the screen, it is on every page
// Uses React Router Links
function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        Trucking Safe
      </Link>
      <div>
        <ul className="navbar-nav nav-links">
          <li className="nav-item">
            <Link to="/signup">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout">
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation