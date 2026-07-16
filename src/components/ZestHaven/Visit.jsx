import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import ScrollReveal, { StaggerItem } from "../UI/ScrollReveal";
import Button from "../UI/Button";
import Section from "../UI/Section";
import SectionHeader from "../UI/SectionHeader";
import InfoRow from "../UI/InfoRow";

const Visit = () => {
  return (
    <Section id="visit" label="Visit us">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal animation="slideLeft">
          <div className="h-[320px] overflow-hidden rounded-3xl border border-border bg-card shadow-elegant sm:h-[400px] lg:h-[480px]">
            <iframe
              title="Map showing ZestHaven Bukka location in Lekki Phase 1, Lagos"
              src="https://www.google.com/maps?q=Lekki+Phase+1,+Lagos,+Nigeria&output=embed"
              loading="lazy"
              className="h-full w-full grayscale-[0.2]"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slideRight">
          <SectionHeader eyebrow="VISIT US" title="Find your seat at the table." sub="Located in the heart of Lekki Phase 1, ZestHaven is easily accessible by car or ride-hail. Walk-ins are welcome, reservations are recommended for parties of four or more." />

          <ScrollReveal animation="fadeUpStagger" className="mt-10 space-y-6" as="div">
            <StaggerItem as="div"><InfoRow icon={MapPin} title="Location" lines={["14 Admiralty Way, Lekki Phase 1", "Lagos, Nigeria"]} /></StaggerItem>
            <StaggerItem as="div"><InfoRow icon={Clock} title="Opening Hours" lines={["Mon – Thu · 11:00 – 22:00", "Fri – Sun · 11:00 – 00:00"]} /></StaggerItem>
            <StaggerItem as="div"><InfoRow icon={Phone} title="Contact" lines={["+234 907 028 1022", "hello@zesthaven.ng"]} /></StaggerItem>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.3} className="mt-10 flex flex-wrap gap-3">
            <Button href="https://wa.me/2349070281022" variant="primary" size="md">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Order on WhatsApp
            </Button>
            <Button href="#reserve" variant="outline" size="md" onClick={(e) => { e.preventDefault(); document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
              Reserve a Table
            </Button>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default Visit;
