import "./App.css";
import About from "./components/about/About";
import ChangeColorTheme from "./components/changeColorTheme/ChangeColorTheme";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import ScrollUp from "./components/scrollUp/ScrollUp";

function App() {
  return (
    <main>
      <Navbar />
      <ChangeColorTheme />
      <Home />
      <About />
      <Project />
      <Contact />
      <ScrollUp />
    </main>
  );
}

export default App;
