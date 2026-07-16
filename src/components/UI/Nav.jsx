import { useCallback } from "react";
import { MenuIcon, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import NavLink from "./NavLink";
import NAV from "./NavItem";
import useSmoothScroll from "../../hooks/useSmoothScroll";

function Nav({ open, setOpen, scrolled }) {
  const { handleAnchorClick } = useSmoothScroll();

  const closeOnEscape = useCallback(
    (e) => {
      if (e.key === "Escape") setOpen(false);
    },
    [setOpen]
  );

  const handleNavClick = useCallback(
    (e) => {
      handleAnchorClick(e);
      setOpen(false);
    },
    [handleAnchorClick, setOpen]
  );

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            onClick={handleAnchorClick}
            className="shrink-0"
            aria-label="ZestHaven Bukka — Home"
          >
            <Logo className="origin-left" />
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
            {NAV.map(([label, href]) => (
              <NavLink
                key={href}
                href={href}
                onClick={handleAnchorClick}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button
              href="#reserve"
              variant="primary"
              size="sm"
              arrow
              onClick={handleAnchorClick}
            >
              Reserve a Table
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          aria-hidden={!open}
          className={`overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
            open ? "max-h-96" : "max-h-0"
          }`}
          onKeyDown={closeOnEscape}
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {NAV.map(([label, href]) => (
              <NavLink
                key={href}
                href={href}
                onClick={handleNavClick}
              >
                {label}
              </NavLink>
            ))}

            <Button
              href="#reserve"
              variant="primary"
              size="md"
              className="mt-2 w-full justify-center"
              onClick={handleNavClick}
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
