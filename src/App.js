import "./App.css";
import Landing from "./scenes/landing/index";
import Navbar from "./scenes/global/navbar/index";
import About from "./scenes/about/index";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <About />
    </div>
  );
}

export default App;
