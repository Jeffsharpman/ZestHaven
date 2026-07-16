const Card = ({ variant = "default", padding = "", rounded = "2xl", hover = false, className = "", children }) => {
  const roundeds = {
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    "4xl": "rounded-[2rem]",
  };

  const variants = {
    default: `border border-border bg-card`,
    elevated: `border border-border bg-card shadow-elegant`,
    glass: `glass-card`,
    accent: `border border-gold/30 bg-card`,
    elevatedHover: `border border-border bg-card shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elegant`,
  };

  const hov = hover
    ? `transition-all duration-300 hover:-translate-y-1 hover:border-gold/50`
    : "";

  return (
    <div
      className={`relative overflow-hidden ${roundeds[rounded]} ${variants[variant]} ${hov} ${padding} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
