import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import MoreProjects from "./components/MoreProjects";
import Publications from "./components/Publications";
import Conferences from "./components/Conferences";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <MoreProjects />
      <Publications />
      <Conferences />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;