import "./App.css";
import { useEffect, useState } from "react";
import Landing from "./scenes/landing/index";
import Navbar from "./scenes/global/navbar/index";
import About from "./scenes/about/index";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const [topButtonVisible, setTopButtonVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 20) {
      setTopButtonVisible(true);
    } else {
      setTopButtonVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <About />
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
    </div>
  );
}

export default App;
