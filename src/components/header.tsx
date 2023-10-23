import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

const header = () => {
  return (
    <nav className="navbar-header">
      <div className="container navbar">
        <Link className="nav-brand" to="/">
          <> Earthwip </>
        </Link>
        <ul>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <a>Home</a>
            </NavLink>
          </li>
          <li className="nav-item nav-light">
            <NavLink className="nav-link" to="/login">
              <a>Sign in</a>
            </NavLink>
          </li>
          <li className="nav-item nav-light">
            <NavLink className="nav-link" to="/register">
              <a>Sign up</a>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default header;
