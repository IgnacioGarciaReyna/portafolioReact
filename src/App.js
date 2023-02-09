import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Navigation from "./components/Nav";
import Programming from "./components/Programming";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Technologies from "./components/Technologies";
import University from "./components/University";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <div>
      <LanguageProvider>
        <Navigation />
        <Home />
        <About />
        <Projects />
        {/* <University />
      <Programming />
      <Jobs /> */}
        <Resume />
        <Technologies />
        <Contact />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
