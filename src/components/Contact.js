import React from "react";
import "../styles/Contact.css";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Information</h1>
      <a href="https://drive.google.com/file/d/1Olq3WRLEOPEDQ9Nq8as2jR4SmTZGRk_s/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  <button type="button" className="resumeButton">View Resume</button>
</a>

      <div className="contact-links">
        <a
          href="tel:7325755672"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <i class="fa fa-phone" aria-hidden="true">
          <span className="contact-label"> Phone Number:</span></i>
          <span className="contact-text">7325755672</span>
        </a>
        <a
          href="mailto:tneiman19@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <i class="fa fa-envelope" aria-hidden="true">
          <span className="contact-label"> Email:</span></i>
          <span className="contact-text">tneiman19@gmail.com</span>
        </a>
        <a
          href="https://github.com/tneiman19"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
        <i class="fa fa-github" aria-hidden="true">
          <span className="contact-label"> GitHub:</span></i>
          <span className="contact-text">github.com/tneiman19</span>
        </a>
        <a
          href="https://linkedin.com/in/tzvi-steve-neiman-a05277120"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
        <i class="fa fa-linkedin-square" aria-hidden="true">
          <span className="contact-label"> LinkedIn:</span></i>
          <span className="contact-text">linkedin.com/in/tzvi-steve-neiman-a05277120</span>
        </a>
       
      </div>

  <Form/>


    </div>
  );
};

export default Contact;
