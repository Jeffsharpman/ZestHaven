function FilterPills({ items, active, onChange, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`} role="group">
      {items.map((item) => (
        <button
          key={item}
          aria-current={active === item ? "true" : undefined}
          onClick={() => onChange(item)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
            active === item
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card/40 text-foreground/80 hover:border-gold/60"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterPills;
