import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { LuSend } from "react-icons/lu";
import Validation from "./Validation";
import "./sendEmail.css";

const SendEmail = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues, setFormValues] = useState({
    full_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  });

  const sendEmail = (event) => {
    event.preventDefault();
    setFormErrors(Validation(formValues));
    setIsSubmit(true);
    emailjs
      .sendForm(
        "service_f56m1uo",
        "template_ibkuhxo",
        event.target,
        "r43ECJRNj5wRJf5JC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues({
        full_name: "",
        user_email: "",
        message: "",
      });
    }
  };

  return (
    <div className="send-email-box">
      <form onSubmit={sendEmail} className="input__box">
        <input
          type="text"
          className="contact"
          placeholder="Your Full Name"
          name="full_name"
          value={formValues.full_name}
          onChange={handleChange}
        />

        <p className="error">{formErrors.full_name}</p>

        <input
          type="text"
          className="contact"
          placeholder="Your Email"
          name="user_email"
          value={formValues.user_email}
          onChange={handleChange}
        />

        <p className="error">{formErrors.user_email}</p>

        <textarea
          type="text"
          placeholder="Message"
          id="message"
          name="message"
          value={formValues.message}
          cols={30}
          rows={10}
          onChange={handleChange}
        ></textarea>
        <p className="error">{formErrors.message}</p>

        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="text">
            Thank you! <br></br>Message has been sent!
          </div>
        ) : null}

        <button className="contact__button" type="submit" value="Send">
          Send
          <LuSend className="contact button__icon" />
        </button>
      </form>
    </div>
  );
};

export default SendEmail;
