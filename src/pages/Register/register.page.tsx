import React, { FormEvent, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./register.page.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState("password");
  const [alertMessage, setAlertMessage] = React.useState("");
  const date = new Date();
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", {
    month: "2-digit",
  });
  const day = date.toLocaleString("default", { day: "2-digit" });
  const todayDate = [year, month, day].join("-");
  const registerFormRef = useRef<HTMLFormElement | null>(null);

  const registerHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (registerFormRef.current) {
      const usernameInput = registerFormRef.current.username as
        | HTMLInputElement
        | undefined;
      const emailInput = registerFormRef.current.email as
        | HTMLInputElement
        | undefined;
      const passwordInput = registerFormRef.current.password as
        | HTMLInputElement
        | undefined;
      const confirmPasswordInput = registerFormRef.current
        .confirmPasswordInput as HTMLInputElement | undefined;
      const dateOfBirth = registerFormRef.current.dateOfBirth as
        | HTMLInputElement
        | undefined;
    }
  };

  return (
    <div className="page-register">
      <form className="card" ref={registerFormRef} onSubmit={registerHandle}>
        <h1>Sign up</h1>
        <input type="text" id="username" placeholder="Username" required />
        <input type="email" id="email" placeholder="Email" required />
        <input
          type={showPassword}
          id="password"
          placeholder="Password"
          autoComplete="off"
          required
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
        <p></p>
        <input
          type={showPassword}
          id="confirmPassword"
          placeholder="Confirm Password"
          autoComplete="off"
          required
        />
        <span style={{ visibility: alertMessage == "" ? "hidden" : "visible" }}>
          {alertMessage}
        </span>
        <div className="bd-div">
          <label htmlFor="birthdate" className="bd-label">
            Birth Date
          </label>
          <input
            type="date"
            className="bd-datepicker"
            max={todayDate}
            required
          />
        </div>
        <button>Sign up</button>
        <p>
          already have an account? Login <NavLink to="/login">here</NavLink>
        </p>
      </form>
    </div>
  );
};
