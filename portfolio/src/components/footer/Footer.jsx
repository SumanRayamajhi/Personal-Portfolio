import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__social-media">
          <div className="box">
            <a
              href="https://github.com/SumanRayamajhi/"
              className="footer__social-link"
            >
              <FaGithub className="footer__social-icon" />
            </a>
          </div>

          <div className="box">
            <a
              href="https://www.linkedin.com/in/suman-rayamajhi/"
              className="footer__social-link"
            >
              <FaLinkedinIn className="footer__social-icon" />
            </a>
          </div>
        </div>
        <p className="footer__copy"> &#169; 2023, All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
