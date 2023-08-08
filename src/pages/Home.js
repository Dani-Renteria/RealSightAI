import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/pageStyles/Home.css";
import laptop from "../images/laptop.svg";
import cost from "../images/cost.svg";
import sustain from "../images/sustainability.svg";
import speed from "../images/speed.svg";
import chat from "../images/Framechat.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DemoPopup from "../components/DemoPopup";

function Home() {
  window.onload = function () {
    const menu_btn = document.querySelector(".hamburger");

    menu_btn.addEventListener("click", function () {
      menu_btn.classList.toggle("is-active");
    });
  };

  const { ref: start, inView: startIsVisible } = useInView();
  const { ref: myRef, inView: headerOneVisible } = useInView();
  const { ref: points, inView: pointsAreVisible } = useInView();
  const { ref: assistant, inView: assistantIsVisible } = useInView();
  const { ref: benifits, inView: benAreVisible } = useInView();
  const { ref: benifitsTwo, inView: benTwoIsVisible } = useInView();
  const { ref: demo, inView: demoIsVisible } = useInView();

  const [active, setActive] = useState(false);

  return (
    <div className="homeWrapper">
      <div className="navLoc">
        <Navbar />
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
      <div id="home" ref={start} className="intro">
        {/** All info before the buildings skyline */}
        <div
          ref={myRef}
          className={`headerOne ${startIsVisible === true ? "show" : "hidden"}`}
        >
          <div className="introSnip">
            <div className="bigText">
              AI-powered real estate management for enterprises
            </div>
            <div className="subText">
              Unlock operational efficiency and improve sustainability of
              enterprise real estate. Take advantage of a holistic operational
              overview and personalized insights provided by our platform.
            </div>
            <button
              className="headerDemo"
              type="button"
              onClick={() => setActive(true)}
            >
              Try demo
            </button>
          </div>
          <div className="laptop">
            <img src={laptop} alt="laptop" />
          </div>
        </div>
        <div
          ref={myRef}
          className={`headerTwo ${
            headerOneVisible === true ? "show" : "hidden"
          }`}
        >
          <div className="headerTwoTxt">
            A one of a kind AI-powered real estate management solution for
            businesses
          </div>
        </div>
        <div className="ourPoints">
          <div
            ref={points}
            className={`point ${pointsAreVisible === true ? "show" : "hidden"}`}
          >
            <img src={cost} alt="cost icon" />
            <div className="pointInfo">
              <div className="pointInfoHeader">
                Cost efficiency & Operational excellence
              </div>
              <div className="pointInfoDetails">
                Driving Savings through Holistic Operational Overview and
                Personalized Actionable Insights
              </div>
            </div>
          </div>

          <div
            ref={points}
            className={`point ${pointsAreVisible === true ? "show" : "hidden"}`}
          >
            <img src={sustain} alt="sustainability icon" />
            <div className="pointInfo">
              <div className="pointInfoHeader">Sustainability</div>
              <div className="pointInfoDetails">
                AI-powered recommendations, optimizing natural resource usage
                and reducing environmental impact
              </div>
            </div>
          </div>

          <div
            ref={points}
            className={`point ${pointsAreVisible === true ? "show" : "hidden"}`}
          >
            <img src={speed} alt="speed icon" />
            <div className="pointInfo">
              <div className="pointInfoHeader">Speed and reliability</div>
              <div className="pointInfoDetails">
                45X faster data extraction accurate data at your fingertips, and
                time-saving for your operational team
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Top header information ^ Now we code the blue skyline */}
      <div className="skyline" />
      <div className="underSky">
        <div
          ref={assistant}
          className={`underSkyContainer ${
            assistantIsVisible === true ? "show" : "hidden"
          }`}
        >
          <div className="assistant">
            Like having your own personal assistant
          </div>
          <img src={chat} alt="chat" />
        </div>
      </div>
      {/** Blue container ends. Last section before the demo starts */}
      <div ref={benifits} className="benifits">
        <div className="benifitsContainer">
          <div
            className={`benRowOne ${
              benAreVisible === true ? "show" : "hidden"
            }`}
          >
            <div className="benImg One" />
            <div className="benRowTextContainer">
              <div className="benRowHeader simp">Simplify your operations</div>
              <div className="benRowContentOne">
                <div>
                  Instantly and seamlessly access the real-time operational data
                  of your entire enterprise real estate portfolio from any
                  location, right at your fingertips.
                </div>
                <div>
                  From energy consumption and climate control to maintenance
                  scheduling, our AI-driven solutions ensure seamless,
                  sustainable, and cost-effective management.
                </div>
              </div>
            </div>
          </div>
          <div
            ref={benifitsTwo}
            className={`benRowTwo ${
              benTwoIsVisible === true ? "show" : "hidden"
            }`}
          >
            <div className="benRowTextContainer">
              <div className="benRowHeader">
                Achieve operational cost savings
              </div>
              <div className="benRowContent">
                RealSight AI drives operational cost savings for enterprise real
                estate through automated data collection, advanced machine
                learning insights, and predictive analytics, resulting in
                optimized operations and significant financial benefits.
              </div>
            </div>
            <div className="benImg Two" />
          </div>
        </div>
      </div>
      {/**benifits end and the demo begins */}
      <div
        ref={demo}
        className={`demo ${demoIsVisible === true ? "show" : "hidden"}`}
      >
        <div className="demoContainer">
          <div className="demoMessage">
            See what RealSight <div>AI</div> can do
          </div>
          <div className="demoContent">
            <div className="demoContentHeader">What can I expect?</div>
            <div className="expectations">
              <div>
                We will connect you with a member of the RealSight AI team to
                discuss your company's needs
              </div>
              <div>
                You will recieve a live demonstration of our services in action
              </div>
              <div>
                All questions will be answered regarding all of our product's
                features and pricing
              </div>
            </div>
            <button
              className="homeDemo"
              type="button"
              onClick={() => setActive(true)}
            >
              Request a demo
            </button>
          </div>
        </div>
      </div>
      <div className="footerLoc">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
