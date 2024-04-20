import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import "./LoginForm.css";

const LoginForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData
      );
      alert("Login successful!");
      setUser(response.data.user);
      navigate("/admin"); // Use navigate instead of history.push
    } 
    catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please check your username and password.");
    }
  };

  return (
    <div className="loginFormSec">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="wrapper">
        <form className="p-3 mt-3" onSubmit={handleSubmit}>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center fs-6">
            <a href="#">Forget password?</a> 
          </div>
          <button className="btn mt-3" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
