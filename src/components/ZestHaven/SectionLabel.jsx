const SectionLabel = ({ children }) => {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
      <span className="h-px w-8 bg-gold/50" />
      {children}
    </div>
  );
};

export default SectionLabel;
