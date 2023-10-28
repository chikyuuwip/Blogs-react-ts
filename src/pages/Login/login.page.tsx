import React, { FormEvent, useRef } from "react";
import "./login.page.css";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState("password");
  const loginFormRef = useRef<HTMLFormElement | null>(null);

  const loginHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loginFormRef.current) {
      const usernameInput = loginFormRef.current.username as
        | HTMLInputElement
        | undefined;
      const passwordInput = loginFormRef.current.password as
        | HTMLInputElement
        | undefined;

      if (usernameInput && passwordInput) {
        console.log("Username:", usernameInput.value);
        console.log("Password:", passwordInput.value);
      }
    }
  };

  return (
    <div className="page">
      <form ref={loginFormRef} onSubmit={loginHandle} className="card">
        <h1>Sign in</h1>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
          autoComplete="on"
        />
        <input
          type={showPassword}
          id="password"
          name="password"
          placeholder="Password"
          required
          autoComplete="on"
        />
        {showPassword == "password" ? (
          <VisibilityIcon
            className="visible-icon"
            onClick={() => {
              setShowPassword("text");
            }}
          />
        ) : (
          <VisibilityOffIcon
            className="visible-icon"
            onClick={() => {
              setShowPassword("password");
            }}
          />
        )}

        <button>Sign in</button>
        <p>
          Don't have an account? Register <NavLink to="/register">here</NavLink>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
