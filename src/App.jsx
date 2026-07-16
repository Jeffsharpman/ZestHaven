import { useEffect, useState } from "react";
import Home from "./components/Home";
import Nav from "./components/UI/Nav";
import Footer from "./components/ZestHaven/Footer";
import DeveloperSchema from "./components/SEO/DeveloperSchema";
import ScrollProgress from "./components/UI/ScrollProgress";
import LoadingScreen from "./components/UI/LoadingScreen";

const App = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <LoadingScreen />
      <DeveloperSchema
        projectName="ZestHaven Bukka"
        projectUrl="https://zesthaven.netlify.app"
        projectDescription="A modern Nigerian bukka in the heart of Lekki, Lagos. Family recipes, fresh market ingredients, open-fire cooking — served in a space designed for how Lagos eats now. Designed and developed by Oyenuga Joshua under the Sharpman brand."
        technologies={["React", "Vite", "Tailwind CSS", "Framer Motion", "Netlify"]}
      />
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:inset-x-0 focus:top-0 focus:bg-primary focus:text-primary-foreground focus:p-4 focus:text-center focus:text-sm focus:font-semibold focus:outline-none"
      >
        Skip to main content
      </a>
      <header role="banner">
        <Nav open={open} setOpen={setOpen} scrolled={scrolled} />
      </header>
      <main id="main-content" role="main" tabIndex={-1}>
        <Home />
      </main>
      <footer role="contentinfo">
        <Footer />
      </footer>
    </>
  );
};

export default App;
