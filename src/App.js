import "./App.css";
import { useEffect, useState } from "react";
import Landing from "./scenes/landing/index";
import Navbar from "./scenes/global/navbar/index";
import About from "./scenes/about/index";
import Projects from "./scenes/projects/index";
import Contact from "./scenes/contact/index";
import { IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const [topButtonVisible, setTopButtonVisible] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 800px)");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 150) {
      setTopButtonVisible(true);
    } else {
      setTopButtonVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Intersection observers

  useEffect(() => {
    const skillsSection = document.querySelector(".skills");
    const aboutSection = document.querySelector(".story");
    const projects = document.querySelectorAll(".project");
    const projectsTitle = document.querySelector(".projects-title");
    const infoSection = document.querySelector(".info");
    const contactSection = document.querySelector(".contact-header");
    const options = {
      root: null,
    };

    const skillsObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.toggle("slideInLeft");
        observer.unobserve(entry.target);
      });
    },
    options);

    const aboutObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.toggle("slideInRight");
        observer.unobserve(entry.target);
      });
    },
    options);

    const projectsObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.toggle("slideUp");
        observer.unobserve(entry.target);
      });
    },
    options);

    projects.forEach((project) => {
      projectsObserver.observe(project);
    });

    skillsObserver.observe(skillsSection);
    aboutObserver.observe(aboutSection);
    skillsObserver.observe(contactSection);
    skillsObserver.observe(projectsTitle);
    projectsObserver.observe(infoSection);

    return () => {
      skillsObserver.disconnect();
      aboutObserver.disconnect();
      projectsObserver.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
      {!isSmallScreen && (
        <IconButton
          onClick={scrollToTop}
          id="topBtn"
          style={{
            display: !topButtonVisible && "none",
            position: "fixed",
            bottom: "30px",
            right: "30px",
            zIndex: "1000",
            backgroundColor: "var(--blue-secondary-400)",
            color: "var(--clr-white)",
          }}
        >
          <KeyboardArrowUpIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      )}
    </div>
  );
}

export default App;
