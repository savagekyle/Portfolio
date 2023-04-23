import React from "react";
import "./index.css";
import { useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Projects = (props) => {
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");
  const reversed = props.reversed;

  return (
    <div
      className="project flex"
      style={{ flexDirection: reversed && !isSmallScreen && "row-reverse" }}
    >
      <div className="p-img">
        <img src={props.img} alt="" />
        <GitHubIcon className="github" sx={{ fontSize: "1.8rem" }} />
        <LaunchIcon className="live" sx={{ fontSize: "1.8rem" }} />
      </div>
      <div className="p-content">
        <h1 className="center">{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Projects;
