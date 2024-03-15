import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserLogin.css";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <div className="container">
      <div className="login-box">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <div className="additional-links">
          <span>Forgot Password? </span>
          <span className="reset-password">Reset password</span>
        </div>
        <div className="additional-links">
          <span>Don't have an account? </span>
          <Link to="/signup" className="sign-up">
            Sign Up
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
