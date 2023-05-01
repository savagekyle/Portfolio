import React from "react";
import "./index.css";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const index = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-info container flex column">
        <div className="contact-header center">
          <h1>Let's build something together</h1>
          <p>Here's how you can reach me</p>
        </div>
        <div className="info flex spaceBetween">
          <p>
            <EmailIcon /> savagerkyle@gmail.com
          </p>
          <p>
            <SmartphoneIcon /> (865) 388-8190
          </p>
          <p>
            <LinkedInIcon />
            <a
              href="https://www.linkedin.com/in/kylersavage"
              style={{ textDecoration: "none", color: "var(--clr-white)" }}
            >
              www.linkedin.com/in/kylersavage
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
