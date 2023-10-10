import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Nav from "./Components/Nav/Nav";
import Service from "./Components/Service/Service";
import Skill from "./Components/Skill/Skill";


function App() {
  return (
    <div className="App">
      <Nav />
      <Intro  />
      <About />
      <Skill />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
