import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";
import SectionLabel from "./SectionLabel";
import ScrollReveal, { StaggerItem } from "../UI/ScrollReveal";

function InfoRow({ icon: Icon, title, lines }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-gold/40 bg-card text-gold" aria-hidden="true">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="font-display text-lg">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-muted-foreground">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

const Visit = () => {
  return (
    <section
      id="visit"
      aria-label="Visit us"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal animation="slideLeft" className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title="Map showing ZestHaven Bukka location in Lekki Phase 1, Lagos"
              src="https://www.google.com/maps?q=Lekki+Phase+1,+Lagos,+Nigeria&output=embed"
              loading="lazy"
              className="aspect-square w-full grayscale-[0.2] sm:aspect-[4/3] lg:aspect-auto lg:h-full"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </ScrollReveal>

          <ScrollReveal animation="slideRight">
            <SectionLabel>Visit us</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Find your seat at the table.
            </h2>
            <p className="mt-4 max-w-lg text-base text-foreground/70">
              Located in the heart of Lekki Phase 1, ZestHaven is easily
              accessible by car or ride-hail. Walk-ins are welcome, reservations
              are recommended for parties of four or more.
            </p>

            <ScrollReveal animation="fadeUpStagger" className="mt-10 space-y-6" as="div">
              <StaggerItem as="div">
                <InfoRow
                  icon={MapPin}
                  title="Location"
                  lines={["14 Admiralty Way, Lekki Phase 1", "Lagos, Nigeria"]}
                />
              </StaggerItem>
              <StaggerItem as="div">
                <InfoRow
                  icon={Clock}
                  title="Opening Hours"
                  lines={[
                    "Mon – Thu · 11:00 – 22:00",
                    "Fri – Sun · 11:00 – 00:00",
                  ]}
                />
              </StaggerItem>
              <StaggerItem as="div">
                <InfoRow
                  icon={Phone}
                  title="Contact"
                  lines={["+234 907 028 1022", "hello@zesthaven.ng"]}
                />
              </StaggerItem>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.3} className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://wa.me/2349070281022"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm hover:scale-[1.03] transition-transform"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Order
                on WhatsApp
              </a>
              <a
                href="#reserve"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-6 py-3 text-sm font-semibold text-gold hover:bg-gold hover:text-gold-foreground transition-colors"
              >
                Book Table
              </a>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Visit;
