import { motion } from "framer-motion";
import founder from "../../assets/founder.jpg";
import SectionLabel from "./SectionLabel";
import ScrollReveal, { StaggerItem } from "../UI/ScrollReveal";
import {
  ChefHat,
  UtensilsCrossed,
  Flame,
  Leaf,
} from "lucide-react";

function Badge({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 px-4 py-3 text-sm">
      <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
      <span className="text-foreground/85">{text}</span>
    </div>
  );
}

const About = () => {
  return (
    <section id="about" aria-label="About ZestHaven" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <ScrollReveal animation="slideLeft" className="relative order-2 lg:order-1">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-gold/30" aria-hidden="true" />
          <motion.img
            src={founder}
            alt="Chef Amaka, founder of ZestHaven Bukka"
            width={900}
            height={1100}
            loading="lazy"
            className="relative z-10 aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute -bottom-6 -right-4 z-20 max-w-[220px] rounded-2xl glass-card p-5 shadow-warm sm:-right-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="font-display text-lg text-gold">Chef Amaka</div>
            <div className="text-xs text-muted-foreground">
              Founder & Head Chef
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal animation="slideRight" className="order-1 lg:order-2">
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            From a roadside fire to a{" "}
            <span className="text-gradient-warm italic">modern bukka.</span>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              ZestHaven began on a small stove in Surulere, where Chef Amaka
              cooked the recipes her grandmother whispered to her over firewood.
              Today, we serve those same recipes — pepper-grounded, slow-built,
              fiercely Nigerian — in a dining room designed for the way Lagos
              eats now.
            </p>
            <p>
              Every pepper is sourced from Mile 12. Every yam is hand-pounded.
              Every plate leaves the pass only when it tastes like home.
            </p>
          </div>

          <ScrollReveal animation="fadeUpStagger" className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md" as="div" role="list">
            <StaggerItem as="div" role="listitem"><Badge icon={Leaf} text="Fresh, local sourcing" /></StaggerItem>
            <StaggerItem as="div" role="listitem"><Badge icon={Flame} text="Open-fire grilling" /></StaggerItem>
            <StaggerItem as="div" role="listitem"><Badge icon={ChefHat} text="Hand-pounded yam" /></StaggerItem>
            <StaggerItem as="div" role="listitem"><Badge icon={UtensilsCrossed} text="Generous portions" /></StaggerItem>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
