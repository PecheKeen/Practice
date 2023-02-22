import Headshot from "./components/Headshot"
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
        <Headshot />
        <About />
        <Interests />
        <Footer />
    </div>
  );
}

export default App;
