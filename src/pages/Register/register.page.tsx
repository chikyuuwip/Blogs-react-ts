import React from "react";
import { NavLink } from "react-router-dom";
import "./register.page.css";

export const RegisterPage = () => {
  return (
    <div className="page-register">
      <div className="card">
        <h1>Sign up</h1>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <p className="bd-label">Birth Date</p>
        <input type="date" className="birthdate" placeholder="dd-mm-yyyy" />

        <button>Sign up</button>
        <p>
          already have an account? Login <NavLink to="/login">here</NavLink>
        </p>
      </div>
    </div>
  );
};
