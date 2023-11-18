import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-scroll";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__container-side-line">
          <div className="home__container-circle" />
          <div className="home__container-line" />
        </div>
        <div className="home__meta ">
          <h2 className="home__text">
            Hello, I'm <span>Suman Rayamajhi</span>
          </h2>
          <h3 className="home__text">Full Stack Web Developer </h3>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            offset={200}
            duration={100}
          >
            <button className="home__button">
              More About Me
              <span className="button__icon">
                <FaAngleDown />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
