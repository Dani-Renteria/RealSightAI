import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/pageStyles/Product.css";
import webpage from "../images/product-images/BuildingsPage.svg";
import bench from "../images/product-images/GroupBenchmark.svg";
import Footer from "../components/Footer";
import OuterCir from "../images/product-images/g4213CircularEcon.svg";
import InnerCir from "../images/product-images/Circular Economy.svg";
import Navbar from "../components/Navbar";
import DemoPopup from "../components/DemoPopup";

import insightOne from "../images/product-images/Group 23insightOne.svg";
import actionOne from "../images/product-images/Group 24actionOne.svg";
import insightTwo from "../images/product-images/Group 25insightTwo.svg";
import actionTwo from "../images/product-images/Group 26actionTwo.svg";
import insightThree from "../images/product-images/Group 27insightThree.svg";
import actionThree from "../images/product-images/Group 28actionThree.svg";

function Product() {
  const [active, setActive] = useState(false);
  const { ref: start, inView: startIsVisible } = useInView();

  const { ref: points, inView: pointsAreVisible } = useInView();

  const { ref: circle, inView: circleIsVisible } = useInView();

  const { ref: insightT, inView: insightIsVisible } = useInView();

  const { ref: insights, inView: insightsAreVisible } = useInView();

  return (
    <div className="productWrapper">
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
      <div className="productOverview">
        <div className="productAlign">
          <div
            ref={start}
            className={`productInfo ${
              startIsVisible === true ? "show" : "hidden"
            }`}
          >
            <div className="proInfoHeader">Real estate operation software</div>
            <div className="proInfoSub">
              Streamline operations, optimize efficiency, and drive
              sustainability. Unlock personalized insights and cost-saving
              opportunities.
            </div>
            <button
              className="proDemo"
              type="button"
              onClick={() => setActive(true)}
            >
              Try demo
            </button>
          </div>
          <img
            ref={start}
            className={`hidden ${startIsVisible === true ? "show" : "hidden"}`}
            src={webpage}
            alt="website"
          />
        </div>
      </div>
      <div className="productSky" />
      <div ref={points} className="productFurtherDetails">
        <div className="features">
          <div
            className={`benchMark ${
              pointsAreVisible === true ? "show" : "hidden"
            }`}
          >
            <div className="benchTitle">Cost savings and benchmarking</div>
            <div className="benchInfo">
              RealSight AI collects, extracts, and evaluates data from various
              sources, providing enterprises with comprehensive insights into
              their real estate operations. This enables data-driven
              decision-making, identifies opportunities for cost savings, and
              improves overall efficiency.
            </div>
            <img src={bench} alt="benchmark table" />
          </div>

          <div className="otherFeatures">
            <div
              ref={points}
              className={`featureContainer ${
                pointsAreVisible === true ? "show" : "hidden"
              }`}
            >
              <div className="fTitle">Prevent equipment failures</div>
              <div className="fInfo">
                Using Maintenance predictive analytics we minimize downtime,
                reduce repair costs, and ensure seamless operations.
              </div>
              <div className="imgFail" />
            </div>

            <div
              ref={points}
              className={`featureContainer ${
                pointsAreVisible === true ? "show" : "hidden"
              }`}
            >
              <div className="fTitle">Natural resource savings</div>
              <div className="fInfo">
                RealSight AI optimizes building operations, detects outliers,
                and forecasts consumption, driving significant cost reductions
                for your enterprise.
              </div>
              <div className="imgNatural" />
            </div>
          </div>
        </div>
      </div>

      <div className="insightsWrapper">
        <div className="insightsContainer">
          <div
            ref={insightT}
            className={`insightsText ${
              insightIsVisible === true ? "show" : "hidden"
            }`}
          >
            <div>Personalized pathway with actionable insights</div>
            <div>
              RealSight's advanced AI technology generates actionable
              recommendations for cost savings and sustainability improvements
              in enterprise real estate management.
            </div>
          </div>
          <div ref={insights} className="myInsights">
            <div
              className={`individualInsight ${
                insightsAreVisible === true ? "show" : "hidden"
              }`}
            >
              <div className="insightOne">
                <img src={insightOne} alt="insight" />
              </div>
              <div className="action">
                <img src={actionOne} alt="action" />
              </div>
            </div>
            <div
              className={`individualInsight Two ${
                insightsAreVisible === true ? "show" : "hidden"
              }`}
            >
              <div className="insightOne">
                <img src={insightTwo} alt="insight" />
              </div>
              <div className="action">
                <img src={actionTwo} alt="action" />
              </div>
            </div>
            <div
              className={`individualInsight Three ${
                insightsAreVisible === true ? "show" : "hidden"
              }`}
            >
              <div className="insightOne">
                <img src={insightThree} alt="insight" />
              </div>
              <div className="action">
                <img src={actionThree} alt="action" />
              </div>
            </div>
          </div>

          <div className="insightsQuote">
            Take full advantage of our insight paths
          </div>
        </div>
      </div>
      <div className="circularWrapper">
        <div ref={circle} className="circularContainer">
          <div
            className={`cirText ${
              circleIsVisible === true ? "show" : "hidden"
            }`}
          >
            <div>Sustainable circular building operations</div>
            <div>
              RealSight AI optimizes resource usage, reduces environmental
              impact, and aligns with circular principles for real estate
              operations.
            </div>
          </div>
          <div
            className={`cirImage ${
              circleIsVisible === true ? "show" : "hidden"
            }`}
          >
            <img src={OuterCir} alt="circle of arrows" />
            <img
              src={InnerCir}
              alt="circle of arrows with text reading circular economy inside"
            />
          </div>
        </div>
      </div>
      <div className="footerLoc">
        <Footer />
      </div>
    </div>
  );
}

export default Product;
