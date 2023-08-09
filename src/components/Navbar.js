import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/navigation-images/Logo + Name.svg";
import DemoPopup from "./DemoPopup";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/" className="navLink" reloadDocument>
              Home
            </NavLink>
            <NavLink className="navLink" to="/product" reloadDocument>
              Product
            </NavLink>
            <NavLink className="navLink" to="/solution" reloadDocument>
              Solution
            </NavLink>
            <NavLink className="navLink space" to="/ourteam" reloadDocument>
              Our Team
            </NavLink>
            <NavLink className="navLink" to="/contact" reloadDocument>
              Contact
            </NavLink>

            <button
              className="demoNav"
              type="button"
              onClick={() => setActive(true)}
            >
              Try demo
            </button>

            <NavLink className="aLogin" to="/login" reloadDocument>
              <button className="login" type="button">
                Login
              </button>
            </NavLink>
          </div>
          <button
            className={`hamburger ${menu ? "is-active" : ""}`}
            onClick={() => showMenu(!menu)}
          >
            <div className="bar" />
          </button>
        </div>
        <div className={`mobileLinks ${menu ? "is-active" : ""}`}>
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
          <NavLink className="navLink" to="/product" reloadDocument>
            Product
          </NavLink>
          <NavLink className="navLink" to="/solution" reloadDocument>
            Solution
          </NavLink>
          <NavLink className="navLink" to="/ourteam" reloadDocument>
            Our Team
          </NavLink>
          <NavLink className="navLink" to="/contact" reloadDocument>
            Contact
          </NavLink>
          <NavLink className="navLink login" to="/login" reloadDocument>
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
