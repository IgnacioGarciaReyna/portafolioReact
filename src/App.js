import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigation from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Technologies from "./components/Technologies";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <div>
      <LanguageProvider>
        <Navigation />
        <Home />
        <About />
        <Projects />
        <Resume />
        <Technologies />
        <Contact />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
