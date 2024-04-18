import React from "react";
import "./contact.css";
import SendEmail from "./sendEmail/SendEmail";
import SocialMedia from "./socialMedia/SocialMedia";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">
        Please feel free to contact me if you think I am good enough for your
        requirements.
      </span>
      <div className="contact__container">
        <SendEmail />
        <SocialMedia />
      </div>
    </section>
  );
};

export default Contact;
