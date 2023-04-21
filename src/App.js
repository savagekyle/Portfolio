import "./App.css";
import Landing from "./scenes/landing/index";
import Navbar from "./scenes/global/navbar/index";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
