import React from "react";
import "./index.css";
import Portrait from "../../assets/vector-portrait.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-content container flex spaceBetween">
        <div className="title-wrapper flex column flexMiddle">
          <h1 className="title center">Kyle Savage</h1>
          <h3 className="subtitle">Frontend Developer</h3>
          <div className="linkedIn">
            Let's connect{" "}
            <a href="https://www.linkedin.com/in/kylersavage">
              <IconButton>
                <LinkedInIcon
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "2rem" },
                    color: "var(--blue-secondary-500)",
                  }}
                />
              </IconButton>
            </a>
          </div>
        </div>
        <div className="portrait">
          <img src={Portrait} alt="Vector portrait" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
