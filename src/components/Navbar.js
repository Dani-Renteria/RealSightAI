import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink className="navLink" to="/" href="#home">
              Home
            </NavLink>
            <NavLink className="navLink" to="/product">
              Product
            </NavLink>
            <NavLink className="navLink" to="/solution">
              Solution
            </NavLink>
            <NavLink className="navLink space" to="/ourteam">
              Our Team
            </NavLink>
            <NavLink className="navLink" to="/contact">
              Contact
            </NavLink>

            <button
              className="demoNav"
              type="button"
              onClick={() => setActive(true)}
            >
              Try demo
            </button>

            <a className="aLogin" href="/login">
              <button to="/login" className="login" type="button">
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
          <NavLink className="navLink" to="/" href="#home">
            Home
          </NavLink>
          <NavLink className="navLink" to="/product">
            Product
          </NavLink>
          <NavLink className="navLink" to="/solution">
            Solution
          </NavLink>
          <NavLink className="navLink" to="/ourteam">
            Our Team
          </NavLink>
          <NavLink className="navLink" to="/contact">
            Contact
          </NavLink>
          <NavLink className="navLink login" to="/login">
            Login
          </NavLink>
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
