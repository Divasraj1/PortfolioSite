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
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b bg-black">
        <Home />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b bg-black">
        <About />
      </section>
      
      <Video />
      <Portfolio />
      <section className="xl:padding-l wide:padding-r padding-b bg-black">
        <Experience />
      </section>
      
      <SocialLinks/>
      <Cta />
      <Contact />
    </main>
  );
}

export default App;
