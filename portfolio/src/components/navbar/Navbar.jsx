import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FaCog } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import Logo from "../../assets/images/logo3.png";
import "./navbar.css";
import Navlinks from "./Navlinks";
import NavMobileLinks from "./NavMobileLinks";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", this.window.scrollY > 100);
  });

  const [showMenu, setShowMenu] = useState(false);

  const onClick = () => {
    setShowMenu(!showMenu);
  };

  const closeMobileMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="nav logo" className="nav__logo" />

      <div className="nav__links">
        <Navlinks />
      </div>

      {showMenu ? (
        <CgClose className="mobile__menu-icon" onClick={onClick} />
      ) : (
        <CgMenu className="mobile__menu-icon" onClick={onClick} />
      )}

      {showMenu ? (
        <div className="mobile__nav-links">
          <NavMobileLinks closeMobileMenu={closeMobileMenu} />
        </div>
      ) : null}

      <div className="nav__theme">
        <BsSun className="nav__theme-icon" />
        <FaCog className="nav__theme-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
