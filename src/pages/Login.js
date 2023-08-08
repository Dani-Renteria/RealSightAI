import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/pageStyles/Login.css";
import SignIn from "../components/SignIn";

function Login() {
  const { ref: start, inView: startIsVisible } = useInView();

  return (
    <div ref={start} className="loginWrapper">
      <div
        className={`loginContainer ${
          startIsVisible === true ? "show" : "hidden"
        }`}
      >
        <SignIn />
      </div>
      <div className="loginSky" />
      <div className="whiteBack" />
      <div className="loginGrad" />
    </div>
  );
}

export default Login;
