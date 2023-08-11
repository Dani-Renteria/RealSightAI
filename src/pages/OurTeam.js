import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/pageStyles/OurTeam.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function OurTeam() {
  const { ref: start, inView: startIsVisible } = useInView();

  const { ref: one, inView: oneIsVisible } = useInView();

  const { ref: two, inView: twoIsVisible } = useInView();

  const { ref: three, inView: threeIsVisible } = useInView();

  const { ref: four, inView: fourIsVisible } = useInView();

  return (
    <div className="teamWrapper">
      <div className="navLoc">
        <Navbar />
      </div>
      <div
        ref={start}
        className={`teamHeaderWrapper ${
          startIsVisible === true ? "show" : "hidden"
        }`}
      >
        Here at RealSight<div>AI</div> we make buildings more sustainable and
        cost-efficient
      </div>
      <div className="teamSky" />
      <div className="ourTeamContainer">
        <div>Meet our team</div>
      </div>
      <div className="teamBioWrapper">
        <div className="bios">
          <div
            ref={one}
            className={`bio ${oneIsVisible === true ? "show" : "hidden"}`}
          >
            <div className="profileContainer">
              <div className="profileCircle">
                <div className="profilePic One" />
              </div>
              Andrea Hajdu MRICS, MCR
            </div>
            <div>
              Andrea Hajdu has over a decade of experience working for Fortune
              500 companies like CBRE, Pfizer, and Sodexo, She brings invaluable
              expertise in enterprise real estate with a remarkable track record
              of handling budgets exceeding 20 M EUR while working regionally
              across EMEA. Her leadership in implementing real estate strategies
              and driving operational excellence has made her an integral part
              of our team.
            </div>
          </div>
          <div
            ref={two}
            className={`bio ${twoIsVisible === true ? "show" : "hidden"}`}
          >
            <div className="profileContainer">
              <div className="profileCircle">
                <div className="profilePic Two" />
              </div>
              Daniel Göcző
            </div>
            <div>
              Daniel Göcző has over 15 years of experience in building
              successful companies from scratch. With a solid background in
              streamlining operations and financial management, Daniel plays a
              pivotal role in RealSight AI, providing invaluable support. His
              attention to detail and dedication to excellence ensure that
              day-to-day functions run seamlessly. As a seasoned entrepreneur,
              Daniel's contributions add immense value to the team.
            </div>
          </div>
          <div
            ref={three}
            className={`bio ${threeIsVisible === true ? "show" : "hidden"}`}
          >
            <div className="profileContainer">
              <div className="profileCircle">
                <div className="profilePic Three" />
              </div>
              Smruthi Ravichandran
            </div>
            <div>
              Smruthi Ravichandran is a Software Engineer and Scrum Master with
              expertise in AI and Big Data, excelling in building end-to-end
              solutions with minimal training data. With a Master's in Computer
              Science focused on Big Data and AI and a strong track record of
              successful project management, she is instrumental in driving
              success. Her proficiency in data analysis, NLP, and deep learning,
              along with expertise in Python, ML, AI, Java, MongoDB, and more,
              complements our agile team.
            </div>
          </div>
          <div
            ref={four}
            className={`bio ${fourIsVisible === true ? "show" : "hidden"}`}
          >
            <div className="profileContainer">
              <div className="profileCircle">
                <div className="profilePic" />
              </div>
              Dani Renteria
            </div>
            <div>
              Dani Renteria is a Software Development Intern with a strong track
              record in data structures and programming. Proficient in Java,
              Python, Javascript, and tools like React, Adobe creative tools,
              and Figma, Dani's creativity and technical expertise are
              invaluable to our team.
            </div>
          </div>
        </div>
      </div>
      <div className="footerLoc">
        <Footer />
      </div>
    </div>
  );
}

export default OurTeam;
