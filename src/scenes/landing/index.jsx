import React from "react";
import "./index.css";
import Portrait from "../../assets/vector-portrait.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

const index = () => {
  return (
    <div className="landing">
      <div className="container flex spaceBetween">
        <div className="title-wrapper flex column flexMiddle">
          <h1 className="title">Kyle Savage</h1>
          <h3 className="subtitle">Frontend Developer</h3>
          <div className="linkedIn">
            Let's connect{" "}
            <IconButton>
              <LinkedInIcon
                sx={{ fontSize: "2rem", color: "var(--blue-secondary-500)" }}
              />
            </IconButton>
          </div>
        </div>
        <div className="portrait">
          <img src={Portrait} alt="Vector portrait" />
        </div>
      </div>
    </div>
  );
};

export default index;
