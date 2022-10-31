import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Navigation from "./components/Nav";
import Programming from "./components/Programming";
import University from "./components/University";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <University />
      <Programming />
      <Jobs />
    </div>
  );
}

export default App;
