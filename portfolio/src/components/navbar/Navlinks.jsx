import React from "react";
import { Link } from "react-scroll";

const Navlinks = () => {
  return (
    <div className="Nav__links-desktop">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        offset={-100}
        duration={100}
        className="desktopMenuItem"
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        offset={-100}
        duration={500}
        className="desktopMenuItem"
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="project"
        spy={true}
        offset={100}
        duration={500}
        className="desktopMenuItem"
      >
        Project
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        offset={0}
        duration={500}
        className="desktopMenuItem"
      >
        Contact
      </Link>
    </div>
  );
};

export default Navlinks;
