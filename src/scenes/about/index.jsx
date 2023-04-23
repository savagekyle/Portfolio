import React from "react";
import "./index.css";
import Skills from "../../components/skills/index";

const index = () => {
  return (
    <div className="about">
      <div className="container flex spaceBetween">
        <Skills />
        <div className="story flex column">
          <h1>How I got here...</h1>
          <p>
            I attended the University of Tennessee at Chattanooga with an
            initial major of Computer Science. I came to realize that I wasn't
            learning the topics that interested me, and that's when I decided it
            was time to take things into my own hands. As I continued improving
            my skills as a developer, I completed a degree in Marketing with a
            minor in Computer Science. I am eager to continue learning and
            pursuing a career in this field that I am so passionate about.
          </p>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
