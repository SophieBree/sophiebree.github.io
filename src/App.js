import "./App.css";
import Intro from "./components/Intro/Intro.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import Projects from "./components/Projects/Projects.js";
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <ul className="navigation-menu">
        <li><a href="#root">Home</a></li>
        <li><a href="#projects-container">Projects</a></li>
      </ul>
      <Intro />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
