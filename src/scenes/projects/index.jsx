import React from "react";
import Projects from "../../components/projects/index";
import "./index.css";
import br from "../../assets/br.png";
import kebo from "../../assets/kebo.png";
import portfolio from "../../assets/portfolio.png";
import udemy from "../../assets/udemy-certificate.jpg";

const index = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h1 className="projects-title center">
          My Projects
          <hr />
        </h1>

        <Projects
          img={br}
          title="Blackthorn Residential"
          content="This was my first project for commercial use. The website was designed and created for Blackthorn Residential, LLC. The purpose of the website is to showcase work done by Blackthorn Residential, and provide a way to contact the company for any inquiries. It also features an about page with information about the company and its President, as well as a unique and responsive design.  
          "
          github="https://github.com/savagekyle/Blackthorn-Residential"
          live="https://blackthornresidential.com"
        />
        <Projects
          img={kebo}
          title="Kebo Live Chat"
          content="This live chat application is one of my favorite projects. It is project that I collaborated on with another developer. It demonstrates my ability to work with not only the frontend, but the backend as well, and tie the two together. Backend technologies such as MongoDB and Graphql were used in the creation of this project. Google authentication, password hashing, form validations, and more were used to handle user logins."
          github="https://github.com/sebodroid/CoolestThingDone"
          live=""
          reversed={true}
        />
        <Projects
          img={portfolio}
          title="My Portfolio"
          content="This one is obvious, but it is a project that I am proud of. It is my personal portolio and it was built to showcase what I can do as a Frontend Developer. Utilizing mainly just React, CSS, and Javascript, I was able to put together this dynamic and responsive personal website. Material UI was utilized for the icons and pop-up dialogs. I also created the vector image that was used for the landing page."
          github="https://github.com/savagekyle/Portfolio"
          live=""
        />
        <Projects
          img={udemy}
          title="Udemy Projects"
          content="There were too many projects from this course to put on here alone. This course took me 65.5 hours to complete, and it was very helpful for improving my skills as a developer. Throughout this course, I learned countless new skills and was able to apply what I learned. From basic HTML and CSS websites, to full stack applications. Some of the projects from the course have been published to my github."
          github="https://github.com/savagekyle?tab=repositories"
          live=""
          reversed={true}
        />
      </div>
    </div>
  );
};

export default index;
