import React from "react";
import "./index.css";
import Portrait from "../../assets/vector-portrait.png";

const index = () => {
  return (
    <div className="landing">
      <div className="container middle flex spaceBetween">
        <div className="title-wrapper flex column flexMiddle">
          <h1 className="title">Kyle Savage</h1>
          <h3 className="subtitle">Frontend Developer</h3>
        </div>
        <div className="portrait">
          <img src={Portrait} alt="Vector portrait" />
        </div>
      </div>
    </div>
  );
};

export default index;
