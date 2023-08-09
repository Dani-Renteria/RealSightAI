import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/pageStyles/Contact.css";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

function Contact() {
  const { ref: start, inView: startIsVisible } = useInView();

  const { ref: end, inView: endIsVisible } = useInView();

  return (
    <div className="contactWrapper">
      <div
        ref={start}
        className={`contactHeaderWrapper ${
          startIsVisible === true ? "show" : "hidden"
        }`}
      >
        <div className="contactHeader">
          See what RealSight <div>AI</div> can do for you
        </div>
      </div>
      <div className="demoWrapper">
        <div ref={end} className="demoContainer">
          <div
            className={`demoText ${endIsVisible === true ? "show" : "hidden"}`}
          >
            <div>Contact us</div>
            <div>
              Please fill out the form and a member of the RealSight AI team
              will contact you shortly
            </div>
          </div>
          <div
            className={`demoForm ${endIsVisible === true ? "show" : "hidden"}`}
          >
            <Form />
          </div>
        </div>
      </div>
      <div className="demoGrad" />
      <div className="footerLoc">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
