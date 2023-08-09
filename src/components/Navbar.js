import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../images/navigation-images/Logo + Name.svg";
import DemoPopup from "./DemoPopup";

function Navbar() {
  const [active, setActive] = useState(false);
  const [menu, showMenu] = useState(false);
  return (
    <>
      <div className="navWrapper">
        <div className="navContainer">
          <div className="logoMobile">
            <img src={logo} alt="logoM" />
          </div>
          <div className="commonLinks">
            <div className="logoWrapper">
              <img src={logo} alt="logo" />
            </div>
            <a href="/" className="navLink">
              Home
            </a>
            <a className="navLink" href="product">
              Product
            </a>
            <a className="navLink" href="solution">
              Solution
            </a>
            <a className="navLink space" href="ourteam">
              Our Team
            </a>
            <a className="navLink" href="contact">
              Contact
            </a>

            <button
              className="demoNav"
              type="button"
              onClick={() => setActive(true)}
            >
              Try demo
            </button>

            <a className="aLogin" href="login">
              <button className="login" type="button">
                Login
              </button>
            </a>
          </div>
          <button
            className={`hamburger ${menu ? "is-active" : ""}`}
            onClick={() => showMenu(!menu)}
          >
            <div className="bar" />
          </button>
        </div>
        <div className={`mobileLinks ${menu ? "is-active" : ""}`}>
          <a className="navLink" href="/">
            Home
          </a>
          <a className="navLink" href="product">
            Product
          </a>
          <a className="navLink" href="solution">
            Solution
          </a>
          <a className="navLink" href="ourteam">
            Our Team
          </a>
          <a className="navLink" href="contact">
            Contact
          </a>
          <a className="navLink login" href="login">
            Login
          </a>
        </div>
      </div>

      {active === true && (
        <div className="demoHomePopup">
          <button
            className="exitPop"
            type="button"
            onClick={() => setActive(false)}
          >
            Close
          </button>
          <DemoPopup isActive={active} />
        </div>
      )}
    </>
  );
}

export default Navbar;
