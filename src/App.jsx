import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <Home />
        <AboutMe/>
        <Skills/>
        <Portfolio/>
      </section>
      <footer>
        <Contact/>
      </footer>
    </div>
  );
}

export default App;
