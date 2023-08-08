import React from "react";
import "../styles/Footer.css";
import logo from "../images/navigation-images/Logo + Name.svg";
import { NavLink } from "react-router-dom";
import LinkedIn from "../images/footer-images/1652445661linkedin-social-media-svgrepo-com 1linkedin.svg";

function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerContainer">
        <div className="footSectionOne">
          <img src={logo} alt="logo" />
          <div className="footLinks">
            <NavLink className="navLink" to="/">
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
          </div>
        </div>
        <div className="footSectionTwo">
          <div className="linksCopy">
            <div className="social">
              <a href="https://www.linkedin.com/company/realsight-ai/">
                <button type="button">
                  <img src={LinkedIn} alt="LinkedIn logo" />
                </button>
              </a>
            </div>
            © 2023 RealSight AI. Made in Berlin.
          </div>
          <div className="legal">
            <NavLink className="navLink" to="/termsofservice">
              Terms of service
            </NavLink>
            <NavLink className="navLink" to="/privacy">
              Privacy
            </NavLink>
            <NavLink className="navLink" to="/legalnotice">
              Legal notice
            </NavLink>
            <NavLink className="navLink" to="/press">
              Press
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
