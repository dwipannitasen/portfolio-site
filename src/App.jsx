import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import ParticleComponent from "./components/ParticleComponent";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Works from "./components/works/Works";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
        <ParticleComponent />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Projects" >
        <Works/>
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
