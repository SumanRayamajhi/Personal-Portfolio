import React from "react";

const Navlinks = () => {
  return (
    <ul>
      <a href="#home">
        <li className="nav__items">Home</li>
      </a>
      <a href="#about">
        <li className="nav__items ">About</li>
      </a>
      <a href="#project">
        <li className="nav__items ">Project</li>
      </a>
      <a href="#contact">
        <li className="nav__items ">Contact</li>
      </a>
    </ul>
  );
};

export default Navlinks;
