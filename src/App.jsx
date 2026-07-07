import { useEffect, useState } from "react";
import Home from "./components/Home";
import Nav from "./components/ZestHaven/Nav";
import Footer from "./components/ZestHaven/Footer";

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
      <header>
        <Nav open={open} setOpen={setOpen} scrolled={scrolled} />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
