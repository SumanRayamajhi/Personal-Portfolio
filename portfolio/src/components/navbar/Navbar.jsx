import React, { useState } from "react";
import Logo from "../../assets/images/logo3.png";
import Theme from "../theme/Theme";
import { navLinks } from "../../Data.jsx";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
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
    <header className="header">
      <nav className="nav">
        <Link className="nav__logo" to="home" offset={100} duration={500}>
          <img src={Logo} alt="nav logo" className="nav__logo-icon" />
        </Link>

        <div className="nav__btns">
          <div
            className={`${
              showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
            }`}
            onClick={onClick}
          >
            <span></span>
          </div>
        </div>

        <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <div className="nav__data">
            <ul className="nav__list">
              {navLinks.map(({ name, icon, path }, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <Link
                      activeClass="active"
                      to={path}
                      spy={true}
                      hashSpy={true}
                      offset={-95}
                      duration={500}
                      className="nav__link"
                      onClick={closeMobileMenu}
                    >
                      {icon}
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Theme />
      </nav>
    </header>
  );
};

export default Navbar;
