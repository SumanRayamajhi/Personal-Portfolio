import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </main>
  );
}

export default App;
