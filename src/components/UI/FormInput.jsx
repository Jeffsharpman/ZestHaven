import Eyebrow from "./Eyebrow";

function FormInput({ label, error, className = "", ...props }) {
  return (
    <div className={className}>
      <Eyebrow as="label">{label}</Eyebrow>
      <input
        {...props}
        className={`mt-2 w-full rounded-xl border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/30 ${
          error ? "border-destructive" : "border-border"
        }`}
      />
    </div>
  );
}

export default FormInput;
