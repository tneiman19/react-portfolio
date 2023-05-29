import React from "react";
import "../styles/About.css";

const Graduation = () => {
  return (
    <div className="about-container" style={{paddingTop: '2em', paddingBottom: '15em'}}>
      <div className="image-container">
        <img
          src="data:image/jpeg;base64,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"
          alt="Stock Graduation Photo"
          className="about-image"
        />
      </div>
      <p className="about-text">
      As a student just a few days away from my Rutgers Coding Bootcamp graduation on June 15, 2023, I am filled with a mix of excitement and anticipation. This incredible journey of learning and growth has pushed me to new limits, challenged me to think outside the box, and equipped me with valuable coding skills. 
        <br />
        <br />
        The countless hours of hard work, late nights, and problem-solving have all led me to this moment. I am grateful for the support of my instructors, classmates, and loved ones who have been by my side throughout this transformative experience. 
        <br />
        <br />
        With graduation on the horizon, I am ready to take the next step in my coding career with confidence and enthusiasm. I am filled with gratitude for the knowledge gained and the connections formed, and I cannot wait to showcase my newfound skills. 
        <br />
        <br />
        The countdown is on, and I am ready to embrace the future as a proud graduate of the Rutgers Coding Bootcamp.
       </p>
    </div>
  );
};

export default Graduation;