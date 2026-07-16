import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import heroJollof from "../../assets/hero-jollof.jpg";
import { MapPin } from "lucide-react";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import Button from "../UI/Button";
import Particles from "../UI/Particles";

const instant = { duration: 0 };

function Stat({ n, l, delay }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? instant
          : { duration: 0.6, delay: 1.0 + delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      <div className="font-display text-2xl text-gold sm:text-3xl">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
        {l}
      </div>
    </motion.div>
  );
}

const Hero = () => {
  const { handleAnchorClick } = useSmoothScroll();
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "20%"]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    shouldReduceMotion ? [1, 1] : [1, 0]
  );

  const motionProps = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, ...(shouldReduceMotion ? {} : { y: 0 }) },
    transition: shouldReduceMotion ? instant : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-label="Hero"
      className="relative min-h-screen overflow-hidden"
    >
      <motion.img
        src={heroJollof}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        role="presentation"
        style={{ y: imageY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" aria-hidden="true" />
      <div className="absolute inset-0 adire-pattern opacity-[0.07]" aria-hidden="true" />
      <Particles />

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:justify-center lg:pt-24"
        style={{ opacity: contentOpacity }}
      >
        <div className="max-w-2xl">
          <motion.div
            {...motionProps(0.2)}
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold backdrop-blur"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Lagos · Nigeria</span>
          </motion.div>

          <motion.h1
            {...motionProps(0.4)}
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl"
          >
            Where <span className="text-gradient-warm italic">Tradition</span>
            <br />
            Meets <span className="text-gold">Taste</span>.
          </motion.h1>

          <motion.p
            {...motionProps(0.6)}
            className="mt-6 max-w-xl text-base text-foreground/80 sm:text-lg"
          >
            ZestHaven Bukka brings the soul of Nigerian cooking — slow stews,
            smoky grills, hand-pounded yam — into a setting designed for the way
            Lagos eats now. Family recipes, fresh market ingredients, open-fire
            technique. Every plate tells a story.
          </motion.p>

          <motion.div
            {...motionProps(0.8)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              href="#menu"
              variant="primary"
              size="lg"
              arrow
              onClick={handleAnchorClick}
            >
              Explore the Menu
            </Button>
            <Button
              href="#reserve"
              variant="outline"
              size="lg"
              onClick={handleAnchorClick}
            >
              Reserve a Table
            </Button>
          </motion.div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-6" role="list" aria-label="Restaurant highlights">
            <div role="listitem"><Stat n="12+" l="Years cooking" delay={0} /></div>
            <div role="listitem"><Stat n="40+" l="Signature dishes" delay={0.1} /></div>
            <div role="listitem"><Stat n="4.9★" l="Guest rating" delay={0.2} /></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
