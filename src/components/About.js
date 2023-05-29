import React from "react";
import "../styles/About.css";
import Graduation from "./Graduation";

const About = () => {
  return (
    <>
    <div className="about-container">
      <div className="image-container">
        <img
          src="https://avatars.githubusercontent.com/u/83563310?v=4"
          alt="A photo of the Author"
          className="about-image"
        />
      </div>
      <p className="about-text">
        Hi, my name is Tzvi ('Steve') Neiman, and I am a full-stack developer.
        <br />
        <br />
        I currently work for JCM Living as a Software Developer while taking night classes at Rutgers Coding Bootcamp.
        <br />
        <br />
        Before changing my role at JCM Living, I was a Property Manager there for seven years. So when I decided to change Careers, I started with tweaking and adding new features to help the company be more productive and, at the same time, build helpful components for the end users, which for many years was me.
        <br />
        <br />
        In my free time, I enjoy reading, watching a bit of TV, and taking time to continue building my career skills. My long-term goal is to continue growing my career, continue satisfying clients, and help other aspiring software developers reach their goals and max potential.
      </p>
    </div>
<Graduation/>

    </>
  );
};

export default About;
