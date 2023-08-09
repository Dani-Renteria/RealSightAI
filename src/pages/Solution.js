import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/pageStyles/Solutions.css";
import HeaderShape from "../images/solutions-images/Vector 9solShape.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Solution() {
  const { ref: start, inView: startIsVisible } = useInView();

  const { ref: One, inView: oneIsVisible } = useInView();

  const { ref: Two, inView: twoIsVisible } = useInView();

  const { ref: Three, inView: threeIsVisible } = useInView();

  return (
    <div className="solutionWrapper">
      <div ref={start} className="solutionHeaderWrapper">
        <div className="solutionHeadContainer">
          <div className="solTextContainer">
            <div className="solText">
              <div
                className={`hidden ${
                  startIsVisible === true ? "show" : "hidden"
                }`}
              >
                AI-powered solution for sustainable & cost-efficient operations
              </div>
              <div
                className={`hidden ${
                  startIsVisible === true ? "show" : "hidden"
                }`}
              >
                RealSight AI is an advanced AI-powered SaaS platform that
                enables enterprises to optimize their real estate operations
                sustainably and cost-efficiently. By harnessing cutting-edge
                technology, RealSight AI streamlines processes, reduces
                expenses, and fosters environmentally responsible practices,
                ensuring a smarter and greener approach to real estate
                management.
              </div>
            </div>
          </div>
          <div className="solImg" />
          <img src={HeaderShape} alt="shape" />
        </div>
      </div>
      <div className="solutionSky" />
      <div className="storiesWrapper">
        <div className="storiesContainer">
          <div
            ref={One}
            className={`storRow ${oneIsVisible === true ? "show" : "hidden"}`}
          >
            <div className="rowInfo">
              <div>Empower you team for sustainability success</div>
              <div>
                RealSight's AI-powered platform is a game-changer for your real
                estate department. By providing actionable insights and
                optimizing operations for sustainability, our solution has a
                profound impact on your team's ability to drive meaningful
                change. With data-driven decision-making at their fingertips,
                your team can streamline processes, identify opportunities, and
                align with circular building principles more efficiently.
              </div>
            </div>
            <div className="storImg One" />
          </div>
          <div
            ref={Two}
            className={`storRowTwo ${
              twoIsVisible === true ? "show" : "hidden"
            }`}
          >
            <div className="storImg Two" />
            <div className="rowInfo">
              <div>Access you real estate operations data 45x faster</div>
              <div>
                RealSight Solutions introduces a new era of real estate data
                management for enterprises. No more searching for hard copies or
                tedious manual data entry. Our cutting-edge AI technology
                revolutionizes data management, providing your enterprise with
                lightning-fast access to critical information. With data
                collection and analysis occurring 45X faster than before, your
                team can now make well-informed decisions and optimize
                operations with unmatched efficiency.
              </div>
            </div>
          </div>
          <div
            ref={Three}
            className={`storRow ${threeIsVisible === true ? "show" : "hidden"}`}
          >
            <div className="rowInfo">
              <div>Unleash new cost savings</div>
              <div>
                With lightning-fast data collection and analysis, RealSight AI
                pinpoints inefficiencies and uncovers optimization
                opportunities, directly impacting your savings targets. With
                data-driven insights at their fingertips, your team can
                confidently make informed decisions, achieving savings goals
                more efficiently and driving sustainable financial success in
                real estate operations.
              </div>
            </div>
            <div className="storImg Three" />
          </div>
        </div>
      </div>
      <div className="footerLoc">
        <Footer />
      </div>
    </div>
  );
}

export default Solution;
