import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionLabel from "./SectionLabel";
import ScrollReveal from "../UI/ScrollReveal";

const TESTIMONIALS = [
  {
    name: "Adaeze O.",
    role: "Food blogger, Lagos",
    quote:
      "The jollof here tastes like a Sunday at grandma's — but plated like a Michelin tasting menu. ZestHaven is my new home.",
    initials: "AO",
  },
  {
    name: "Tunde A.",
    role: "Architect",
    quote:
      "Finally, a bukka that takes ambiance as seriously as the pepper. The egusi is dangerously good.",
    initials: "TA",
  },
  {
    name: "Ngozi I.",
    role: "Marketing Lead",
    quote:
      "We brought our European clients — they couldn't stop talking about the suya. Service was flawless.",
    initials: "NI",
  },
  {
    name: "Femi K.",
    role: "Regular guest",
    quote:
      "Warm, generous, deeply Nigerian. The kind of place you bring people you actually love.",
    initials: "FK",
  },
];

const Testimonials = () => {
  return (
    <section aria-label="Testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal animation="fadeUp" className="mx-auto max-w-2xl text-center">
          <SectionLabel>
            <span className="mx-auto">Loved in Lagos</span>
          </SectionLabel>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            What our guests say.
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fadeUpStagger" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" as="div">
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-col gap-5 rounded-3xl border border-border bg-card/60 p-6 transition-all hover:border-gold/50 hover:-translate-y-1"
            >
              <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-2">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-gold text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
