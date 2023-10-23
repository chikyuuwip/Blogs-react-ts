import React from "react";
import "./login.page.css";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState("password");
  return (
    <div className="page">
      <div className="card">
        <h1>Sign in</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
        <p>
          Don't have an account? Register <NavLink to="/register">here</NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
