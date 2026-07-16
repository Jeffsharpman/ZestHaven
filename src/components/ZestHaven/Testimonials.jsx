import { motion } from "framer-motion";
import ScrollReveal from "../UI/ScrollReveal";
import Card from "../UI/Card";
import Section from "../UI/Section";
import SectionHeader from "../UI/SectionHeader";
import StarRating from "../UI/StarRating";
import AvatarInitials from "../UI/AvatarInitials";

const TESTIMONIALS = [
  { name: "Adaeze O.", role: "Food blogger, Lagos", quote: "The jollof here tastes like a Sunday at grandma's — but plated like a Michelin tasting menu. ZestHaven is my new home.", initials: "AO" },
  { name: "Tunde A.", role: "Architect", quote: "Finally, a bukka that takes ambiance as seriously as the pepper. The egusi is dangerously good.", initials: "TA" },
  { name: "Ngozi I.", role: "Marketing Lead", quote: "We brought our European clients — they couldn't stop talking about the suya. Service was flawless.", initials: "NI" },
  { name: "Femi K.", role: "Regular guest", quote: "Warm, generous, deeply Nigerian. The kind of place you bring people you actually love.", initials: "FK" },
];

const Testimonials = () => {
  return (
    <Section label="Testimonials">
      <ScrollReveal animation="fadeUp" className="mx-auto max-w-2xl text-center">
        <SectionHeader eyebrow="GUEST REVIEWS" title="What our guests say." sub="Real feedback from people who have dined with us. No curated endorsements — just honest experiences." />
      </ScrollReveal>

      <ScrollReveal animation="fadeUpStagger" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" as="div">
        {TESTIMONIALS.map((t) => (
          <motion.figure key={t.name} variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
            <Card variant="elevatedHover" rounded="3xl" padding="p-6" className="flex h-full flex-col gap-5">
              <StarRating />
              <blockquote className="text-sm leading-relaxed text-foreground/85">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-2">
                <AvatarInitials initials={t.initials} />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </Card>
          </motion.figure>
        ))}
      </ScrollReveal>
    </Section>
  );
};

export default Testimonials;
