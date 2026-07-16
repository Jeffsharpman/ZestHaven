import { MessageCircle } from "lucide-react";
import { SocialIcons } from "./SocialIcons";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import Button from "../UI/Button";
import Eyebrow from "../UI/Eyebrow";
import Logo from "../UI/Logo";
import NAV from "../UI/NavItem";

const socialLinks = [
  { Icon: SocialIcons.Instagram, href: "https://www.instagram.com/sharpman_dev", label: "Instagram" },
  { Icon: SocialIcons.Twitter, href: "https://x.com/sharpman_dev", label: "X (Twitter)" },
  { Icon: SocialIcons.LinkedIn, href: "https://www.linkedin.com/in/oyenuga-joshua-058434417", label: "LinkedIn" },
  { Icon: SocialIcons.Facebook, href: "https://www.facebook.com/oyenugajoshua", label: "Facebook" },
  { Icon: SocialIcons.YouTube, href: "https://youtube.com/@sharpman_dev", label: "YouTube" },
  { Icon: SocialIcons.TikTok, href: "https://www.tiktok.com/@sharpman.dev", label: "TikTok" },
  { Icon: MessageCircle, href: "https://wa.me/2349070281022", label: "WhatsApp" },
];

const Footer = () => {
  const { handleAnchorClick } = useSmoothScroll();

  return (
    <footer className="relative border-t border-border/60 bg-card/30 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />

            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A modern Nigerian bukka in the heart of Lekki, Lagos. Built on
              family recipes, fresh markets and open fires. Serving authentic
              Nigerian cuisine in a setting designed for how Lagos eats now.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <Button
                  key={label}
                  href={href}
                  variant="outline"
                  size="sm"
                  aria-label={label}
                  className="!px-0 !py-0 h-10 w-10 justify-center rounded-full"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow as="h3" className="mb-4">EXPLORE</Eyebrow>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={handleAnchorClick}
                    className="hover:text-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow as="h3" className="mb-4">CONTACT</Eyebrow>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>14 Admiralty Way</li>
              <li>Lekki Phase 1, Lagos</li>
              <li>+234 907 028 1022</li>
              <li>hello@zesthaven.ng</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6">
          <div className="flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <div>
              &copy; {new Date().getFullYear()} ZestHaven Bukka. All rights reserved.
            </div>
            <div className="flex flex-col gap-1 sm:items-end">
              <div>
                Designed &amp; Developed by{" "}
                <a
                  href="https://sharpman.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold transition-colors hover:text-gold/80"
                >
                  Oyenuga Joshua
                </a>
                {" "}· Founder of{" "}
                <a
                  href="https://sharpman.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold transition-colors hover:text-gold/80"
                >
                  Sharpman
                </a>
              </div>
              <div className="text-muted-foreground/60">
                Part of the Sharpman Software Portfolio
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-5 text-xs text-muted-foreground">
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
