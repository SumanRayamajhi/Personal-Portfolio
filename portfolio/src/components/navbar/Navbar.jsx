import React from "react";
import { CiSettings, CiSun } from "react-icons/ci";
import { FaCog } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";
import Logo from "../../assets/images/logo3.png";
import "./navbar.css";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="nav logo" className="nav__logo" />
      <div className="nav__links">
        <Navlinks />
      </div>
      <div className="nav__theme">
        <BsSun className="nav__theme-icon" />
        <FaCog className="nav__theme-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
