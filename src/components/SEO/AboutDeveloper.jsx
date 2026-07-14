import { motion } from "framer-motion";
import { ExternalLink, Code, Globe, Search } from "lucide-react";
import SectionLabel from "../ZestHaven/SectionLabel";
import ScrollReveal, { StaggerItem } from "../UI/ScrollReveal";

const developerData = {
  name: "Oyenuga Joshua",
  brand: "Sharpman",
  role: "Full Stack Web Developer",
  location: "Ikorodu, Lagos, Nigeria",
  portfolio: "https://sharpman.netlify.app",
  email: "buildwithsharpman@gmail.com",
  technologies: ["HTML", "CSS", "JavaScript", "React", "PHP", "Laravel", "Livewire", "Filament"],
  services: [
    { icon: Globe, label: "Custom Website Development" },
    { icon: Code, label: "Web Application Development" },
    { icon: Globe, label: "Restaurant Websites" },
    { icon: Globe, label: "Business Websites" },
    { icon: Globe, label: "Landing Pages" },
    { icon: Globe, label: "Portfolio Websites" },
    { icon: Globe, label: "E-commerce Solutions" },
    { icon: Code, label: "Admin Dashboards" },
    { icon: Code, label: "React Development" },
    { icon: Code, label: "Laravel Development" },
    { icon: Search, label: "SEO Optimization" },
    { icon: Globe, label: "Digital Solutions" },
  ],
};

function ServiceCard({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/30 px-4 py-3 text-sm transition-colors hover:border-gold/40 hover:bg-card/50">
      <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
      <span className="text-foreground/80">{label}</span>
    </div>
  );
}

const AboutDeveloper = ({ projectName = "This project" }) => {
  return (
    <section
      id="about-developer"
      aria-label="About the Developer"
      className="relative border-t border-border/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal animation="fadeUp">
          <SectionLabel>Behind the Code</SectionLabel>
        </ScrollReveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-3">
          {/* Main Developer Info */}
          <ScrollReveal animation="fadeUpStagger" className="lg:col-span-2 space-y-8" as="div">
            <StaggerItem as="div">
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                Built by{" "}
                <span className="text-gradient-warm italic">{developerData.name}</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80">
                {developerData.name} is a {developerData.role} based in{" "}
                {developerData.location}. He specializes in building modern,
                responsive, SEO-friendly websites and web applications for
                businesses across Nigeria and beyond.
              </p>
            </StaggerItem>

            <StaggerItem as="div">
              <h3 className="font-display text-xl text-foreground">
                About {developerData.brand}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/75">
                <strong className="text-foreground/90">{developerData.brand}</strong> is the
                personal web development and digital solutions brand founded by{" "}
                {developerData.name}. It is focused on helping businesses establish
                a stronger online presence through modern websites, web applications,
                and technology-driven digital experiences.
              </p>
            </StaggerItem>

            <StaggerItem as="div">
              <h3 className="font-display text-xl text-foreground">
                Technologies & Tools
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {developerData.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.08 }}
                    className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </StaggerItem>

            <StaggerItem as="div" className="flex flex-wrap gap-3 pt-2">
              <a
                href={developerData.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                View more projects by {developerData.brand}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`${developerData.portfolio}/about`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-background/30 px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                Learn more about {developerData.name}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </StaggerItem>
          </ScrollReveal>

          {/* Services Sidebar */}
          <ScrollReveal animation="slideRight" delay={0.2}>
            <div className="rounded-2xl border border-border bg-card/30 p-6">
              <h3 className="font-display text-lg text-gold">
                {developerData.brand} Services
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                Professional digital solutions for businesses
              </p>
              <ScrollReveal animation="fadeUpStagger" className="mt-5 space-y-3" as="div">
                {developerData.services.map((service) => (
                  <StaggerItem key={service.label} as="div">
                    <ServiceCard
                      icon={service.icon}
                      label={service.label}
                    />
                  </StaggerItem>
                ))}
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>

        {/* Internal Brand Connection */}
        <ScrollReveal animation="fadeUp" delay={0.3} className="mt-12">
          <div className="rounded-2xl border border-border/60 bg-card/20 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-foreground/70">
              <strong className="text-foreground/85">{projectName || "This project"}</strong> is
              one of several projects developed by{" "}
              <strong className="text-foreground/85">{developerData.name}</strong> under
              the <strong className="text-foreground/85">{developerData.brand}</strong> brand.{" "}
              {developerData.brand} provides professional web development and digital
              solutions for businesses across Lagos and Nigeria.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href={developerData.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-gold transition-colors hover:text-gold/80"
              >
                Explore the {developerData.brand} portfolio
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={`${developerData.portfolio}/about`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-gold transition-colors hover:text-gold/80"
              >
                Learn more about {developerData.name}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={`${developerData.portfolio}#services`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-gold transition-colors hover:text-gold/80"
              >
                View {developerData.brand} services
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={`${developerData.portfolio}/contact`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-gold transition-colors hover:text-gold/80"
              >
                Contact {developerData.brand}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutDeveloper;
