import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navlinks a");

  window.onscroll = () => {
    sections.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop - 100;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("nav__active");
          document
            .querySelector(".navlinks a[href*=" + id + "]")
            .classList.add("nav__active");
        });
      }
    });

    /*  let header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 100); */
  };
  return (
    <main>
      <Navbar />
      <Home />
      <About />
    </main>
  );
}

export default App;
