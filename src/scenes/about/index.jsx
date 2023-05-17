import React from "react";
import "./index.css";
import Skills from "../../components/skills/index";

const index = () => {
  return (
    <div className="about fade" id="about">
      <div className="about-content container flex spaceBetween">
        <Skills />
        <div className="story flex column">
          <h1>How I got here...</h1>
          <p>
            I attended the University of Tennessee at Chattanooga with an
            initial major of Computer Science. However, I discovered that the
            Computer Science curriculum did not align with my specific areas of
            interest and professional aspirations. From that point on, I took it
            upon myself to continue studying Computer Science on my own time. As
            I continued improving my skills as a developer, I completed a degree
            in Marketing with a minor in Computer Science. I am eager to
            continue learning and pursuing a career in the field that I am so
            passionate about.
          </p>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
