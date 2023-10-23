import React from "react";
import "./login.page.css";

export const LoginPage = () => {
  return (
    <div>
      <div className="container page">
        <div className="column">
          <h1>Sign in</h1>
          <input></input>
          <input></input>
          <p>
            By continuing, you agree to our User Agreement and acknowledge that
            you understand the Privacy Policy.
          </p>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};
