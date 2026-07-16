import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";

const sizeMap = {
  sm: "px-4 py-2 text-xs tracking-wider",
  md: "px-5 py-3 text-sm tracking-wider",
  lg: "px-8 py-4 text-sm tracking-wider",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer select-none";

const variants = {
  primary: `${base} bg-primary text-primary-foreground shadow-elegant hover:scale-[1.03]`,
  outline: `${base} border border-gold/60 bg-background/30 text-cream backdrop-blur hover:bg-gold hover:text-gold-foreground`,
  ghost: `${base} text-gold hover:bg-gold/15`,
};

const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    href,
    arrow = false,
    className = "",
    children,
    onClick,
    disabled,
    type,
    ...props
  },
  ref
) {
  const classes = `${variants[variant]} ${sizeMap[size]} ${className}`;

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} onClick={onClick} {...props}>
        {children}
        {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} onClick={onClick} disabled={disabled} type={type} {...props}>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
    </button>
  );
});

export default Button;
