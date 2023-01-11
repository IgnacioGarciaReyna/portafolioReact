import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Navigation from "./components/Nav";
import Programming from "./components/Programming";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import University from "./components/University";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Projects />
      {/* <University />
      <Programming />
      <Jobs /> */}
      <About />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
