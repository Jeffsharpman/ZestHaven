import Hero from "./ZestHaven/Hero";
import About from "./ZestHaven/About";
import Menu from "./ZestHaven/Menu";
import Gallery from "./ZestHaven/Gallery";
import Testimonials from "./ZestHaven/Testimonials";
import Visit from "./ZestHaven/Visit";
import Reserve from "./ZestHaven/Reserve";
import Contact from "./UI/Contact";
import WhatsAppFAB from "./UI/WhatsAppFAB";
import AboutDeveloper from "./SEO/AboutDeveloper";
import Marquee from "./UI/Marquee";

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Visit />
      <Reserve />
      <Contact />
      <AboutDeveloper projectName="ZestHaven Bukka" />
      <WhatsAppFAB />
    </>
  );
};

export default Home;
