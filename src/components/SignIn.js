import React, { useState } from "react";
import "../styles/SignIn.css";
import { NavLink } from "react-router-dom";

function SignIn() {
  const [data, setData] = useState({ userName: "", password: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(data.userName);
    console.log(data);
  };
  return (
    <form method="post" onSubmit={handleSubmit} className="loginForm">
      <div className="loginLogoContainer" />
      <h1>Welcome back</h1>
      <div className="loginDiv">Username</div>
      <input
        className="loginIn"
        type="text"
        name="userName"
        id=""
        onChange={handleChange}
        value={data.userName}
        placeholder="Enter your username"
      />
      <div className="loginDiv">Password</div>
      <input
        className="loginIn"
        type="text"
        name="password"
        id=""
        onChange={handleChange}
        value={data.password}
        placeholder="Enter your password"
      />
      <div className="privacyTxt">
        By continuing you agree to RealSight AI's{" "}
        <NavLink to="/privacy" reloadDocument>
          privacy policy
        </NavLink>
      </div>
      <button className="continue" type="submit">
        Continue
      </button>
    </form>
  );
}

export default SignIn;
