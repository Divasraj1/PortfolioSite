import Navbar from "./components/NavBar"
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Video from "./components/Video";
import Cta from "./components/Cta";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Video />
      <Portfolio />
      <Experience />
      <SocialLinks/>
      <Cta />
      <Contact />
    </div>
  );
}

export default App;
