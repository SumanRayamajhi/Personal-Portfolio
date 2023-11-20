import React from "react";
import { FaMobileAlt, FaAt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./socialMedia.css";

const SocialMedia = () => {
  return (
    <div className="socialMedia__Wrapper">
      <div className="socialMedia__Button">
        <FaMobileAlt className="socialMedia__Button-icon" />
        <h3>Call Me</h3>
        <span>+34631887080</span>
      </div>

      <div className="socialMedia__Button">
        <FaAt className="socialMedia__Button-icon" />
        <h3>Send Me an Email</h3>
        <span>sams.rayamajhi@gmail.com</span>
      </div>

      <div className="socialMedia__Button">
        <FaGithub className="socialMedia__Button-icon" />
        <h3>My Github</h3>
        <span>
          <a href="https://github.com/SumanRayamajhi/">Github</a>
        </span>
      </div>
      <div className="socialMedia__Button">
        <FaLinkedinIn className="socialMedia__Button-icon" />
        <h3>My Linkedin</h3>
        <span>
          <a href="https://www.linkedin.com/in/suman-rayamajhi/">Linkedin</a>
        </span>
      </div>
    </div>
  );
};

export default SocialMedia;
