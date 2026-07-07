import heroJollof from "../../assets/hero-jollof.jpg";
import {
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

function Stat({ n, l }) {
  return (
    <div>
      <div className="font-display text-2xl text-gold sm:text-3xl">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
        {l}
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <img
        src={heroJollof}
        alt="Steaming plate of Nigerian jollof rice with grilled chicken"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
      <div className="absolute inset-0 adire-pattern opacity-[0.07]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:justify-center lg:pt-0">
        <div className="max-w-2xl">
          <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            Lagos · Nigeria
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl">
            Where <span className="text-gradient-warm italic">Tradition</span>
            <br />
            Meets <span className="text-gold">Taste</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base text-foreground/80 sm:text-lg">
            ZestHaven Bukka brings the soul of Nigerian cooking — slow stews,
            smoky grills, hand-pounded yam — into a setting worth dressing up
            for.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              View Menu <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#reserve"
              className="btn-stretch inline-flex items-center gap-2 rounded-full border border-gold/60 bg-background/30 px-7 py-4 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              Reserve a Table
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-6">
            <Stat n="12+" l="Years cooking" />
            <Stat n="40+" l="Signature dishes" />
            <Stat n="4.9★" l="Guest rating" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
