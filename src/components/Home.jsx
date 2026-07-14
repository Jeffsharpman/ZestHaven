import Hero from "./ZestHaven/Hero";
import About from "./ZestHaven/About";
import Menu from "./ZestHaven/Menu";
import Gallery from "./ZestHaven/Gallery";
import Testimonials from "./ZestHaven/Testimonials";
import Visit from "./ZestHaven/Visit";
import Reserve from "./ZestHaven/Reserve";
import Contact from "./ZestHaven/Contact";
import WhatsAppFab from "./ZestHaven/WhatsAppFab";
import AboutDeveloper from "./SEO/AboutDeveloper";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Visit />
      <Reserve />
      <Contact />
      <AboutDeveloper projectName="ZestHaven Bukka" />
      <WhatsAppFab />
    </>
  );
};

export default Home;
