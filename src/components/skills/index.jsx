import React from "react";
import "./index.css";

const index = () => {
  return (
    <div className="skills">
      <h1>Key Skills</h1>
      <div className="flex spaceBetween skills-list">
        <ul>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>API & Integrations</li>
        </ul>
        <ul>
          <li>CSS</li>
          <li>Javascript</li>
          <li>MUI</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>
  );
};

export default index;
