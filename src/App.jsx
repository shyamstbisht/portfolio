import Navbar from "./components/pages/Navbar";
import Home from "./components/home/Home";
import Abouts from "./components/pages/about/Abouts";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <Abouts />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
