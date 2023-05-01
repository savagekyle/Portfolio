import React, { useState } from "react";
import "./index.css";
import { useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const Projects = (props) => {
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");
  const reversed = props.reversed;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className="project flex"
      style={{ flexDirection: reversed && !isSmallScreen && "row-reverse" }}
    >
      <div className="p-img ">
        <img src={props.img} alt="" />
      </div>
      <div className="p-content flex column">
        <h1 className="center">{props.title}</h1>
        <p>{props.content}</p>
        <div className="project-links flex">
          <Link to={props.github}>
            <GitHubIcon className="github" sx={{ fontSize: "1.8rem" }} />
          </Link>
          {props.live ? (
            <Link to={props.live}>
              <LaunchIcon className="live" sx={{ fontSize: "1.8rem" }} />
            </Link>
          ) : (
            <LaunchIcon
              className="live"
              onClick={handleOpen}
              sx={{ fontSize: "1.8rem" }}
            />
          )}
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Live Site Not Available</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sorry! The live site for this project is not currently available.
            Please check back at a later date.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ color: "var(--blue-primary-500)" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Projects;
