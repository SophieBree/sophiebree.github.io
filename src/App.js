import "./App.css";
import Intro from "./components/Intro/Intro.js";
import Projects from "./components/Projects/Projects.js";
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
