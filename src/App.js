import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Navigation from "./components/Nav";
import Programming from "./components/Programming";
import Technologies from "./components/Technologies";
import University from "./components/University";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <University />
      <Programming />
      <Jobs />
      <Technologies />
    </div>
  );
}

export default App;
