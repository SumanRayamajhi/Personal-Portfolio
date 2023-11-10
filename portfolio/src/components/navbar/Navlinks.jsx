import React from "react";

const Navlinks = () => {
  return (
    <div className="navlinks">
      <a href="#home" className="nav__items nav__active">
        Home
      </a>
      <a href="#about" className="nav__items">
        About
      </a>
      <a href="#project" className="nav__items">
        Project
      </a>
      <a href="#contact" className="nav__items">
        Contact
      </a>
    </div>
  );
};

export default Navlinks;
