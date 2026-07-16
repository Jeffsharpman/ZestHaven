const NavLink = ({ href, onClick, active, children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition-colors hover:text-gold ${
        active ? "text-gold" : "text-foreground/80"
      }`}
    >
      {children}
    </a>
  );
};

export default NavLink;
