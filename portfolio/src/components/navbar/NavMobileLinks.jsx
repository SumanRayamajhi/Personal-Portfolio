import React from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";
import "./navbar.css";

const NavMobileLinks = (props) => {
  return (
    <div className="Nav__links-mobile">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        offset={-100}
        duration={100}
        className="mobileMenuItem"
        onClick={() => props.closeMobileMenu()}
      >
        <FaHome className="nav-mobile-icon" />
        Home
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        offset={-100}
        duration={500}
        className="mobileMenuItem"
        onClick={() => props.closeMobileMenu()}
      >
        <FaUser className="nav-mobile-icon" />
        About
      </Link>
      <Link
        activeClass="active"
        to="project"
        spy={true}
        offset={100}
        duration={500}
        className="mobileMenuItem"
        onClick={() => props.closeMobileMenu()}
      >
        <FaFolderOpen className="nav-mobile-icon" />
        Project
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        offset={0}
        duration={500}
        className="mobileMenuItem"
        onClick={() => props.closeMobileMenu()}
      >
        <FaEnvelopeOpen className="nav-mobile-icon" />
        Contact
      </Link>
    </div>
  );
};

export default NavMobileLinks;
