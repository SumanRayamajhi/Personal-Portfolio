import React from "react";
import ProfileImg from "../../assets/images/profile.png";
import CV from "../../assets/file/Suman-Rayamajhi-CV.pdf";
import { FaRegFilePdf, FaFileDownload } from "react-icons/fa";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <div className="about__img">
          <img src={ProfileImg} alt="Personal profile" />
          <span className="circle-spain"></span>
        </div>

        <div className="about__data">
          <p className="about__description">
            An energetic and ambitious, web-developer with proven ability of a
            strong ethics and passion for web design, is excited to use talent
            and grow skills through hard work and motivational aspiration in new
            dynamic and progressive companies.
          </p>

          <a href={CV} download={"Suman-Rayamajhi-CV.pdf"}>
            <button>
              Download CV
              <FaFileDownload className="button__icon" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
