import { ArrowRight, MenuIcon, X } from "lucide-react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#reserve", label: "Reserve" },
];

const Nav = ({ open, setOpen, scrolled }) => {
  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 
          ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
            : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg font-bold shadow-warm">
              Z
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              ZestHaven
              <span className="ml-1 text-gold">·</span>
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                Bukka
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#reserve"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm transition-transform hover:scale-[1.03] "
            >
              Reserve a Table <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile */}
        <div
          className={`overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#reserve"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Reserve a Table <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
