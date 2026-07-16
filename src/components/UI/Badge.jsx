const Badge = ({ variant = "glass", className = "", children }) => {
  const variants = {
    glass: "glass-card rounded-full",
    solid: "rounded-full border border-border bg-background/80 backdrop-blur",
    gold: "rounded-full bg-gold/20 text-gold border border-gold/40",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
