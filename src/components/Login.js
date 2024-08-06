import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../utils/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30, // optional, defaults to 60
        }),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch(login({ user: data.user, token: data.token }));
        navigate("/");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username ?? "emilys"}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password ?? "emilyspass"}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
