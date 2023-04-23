import React from "react";
import Projects from "../../components/projects/index";
import "./index.css";
import br from "../../assets/br.png";
import kebo from "../../assets/kebo.png";

const index = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h1 className="projects-title">
          My Projects
          <hr />
        </h1>

        <Projects
          img={br}
          title="Blackthorn Residential"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          github=""
          live=""
        />
        <Projects
          img={kebo}
          title="Kebo Live Chat"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          github=""
          live=""
          reversed={true}
        />
      </div>
    </div>
  );
};

export default index;
