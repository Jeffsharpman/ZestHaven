import { MessageCircle } from "lucide-react";
import { SocialIcons } from "./SocialIcons";
import useSmoothScroll from "../../hooks/useSmoothScroll";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#reserve", label: "Reserve" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const { handleAnchorClick } = useSmoothScroll();

  return (
    <footer className="relative border-t border-border/60 bg-card/30 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg font-bold" aria-hidden="true">
                Z
              </span>
              <span className="font-display text-2xl">
                ZestHaven <span className="text-gold" aria-hidden="true">·</span> Bukka
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A modern Nigerian bukka in the heart of Lekki, Lagos. Built on
              family recipes, fresh markets and open fires.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                {
                  Icon: SocialIcons.Instagram,
                  href: "https://www.instagram.com/sharpman_dev",
                  label: "Instagram",
                },
                {
                  Icon: MessageCircle,
                  href: "https://wa.me/2349070281022",
                  label: "WhatsApp",
                },
                {
                  Icon: SocialIcons.Facebook,
                  href: "#",
                  label: "Facebook",
                },
                {
                  Icon: SocialIcons.Twitter,
                  href: "https://x.com/sharpman_dev",
                  label: "Twitter",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/40 text-foreground/80 transition-all hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg text-gold">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={handleAnchorClick}
                    className="hover:text-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-gold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>14 Admiralty Way</li>
              <li>Lekki Phase 1, Lagos</li>
              <li>+234 907 028 1022</li>
              <li>hello@zesthaven.ng</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} ZestHaven Bukka. All rights reserved.{" "}
            <span className="hidden sm:inline">·</span>{" "}
            <span className="sm:ml-1">
              Designed and Developed by{" "}
              <a
                href="https://sharpman.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold transition-colors hover:text-gold/80"
              >
                Oyenuga Joshua
              </a>{" "}
              (
              <a
                href="https://sharpman.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold transition-colors hover:text-gold/80"
              >
                Sharpman
              </a>
              )
            </span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">
              Privacy
            </a>
            <a href="#" className="hover:text-gold">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
