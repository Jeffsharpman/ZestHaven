function Section({ id, label, className = "", children }) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`relative py-24 sm:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {children}
      </div>
    </section>
  );
}

export default Section;
