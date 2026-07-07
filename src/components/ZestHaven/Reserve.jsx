import { useState } from "react";
import { ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-gold"
      />
    </div>
  );
}

const Reserve = () => {
  const [sent, setSent] = useState(false);
  return (
    <section id="reserve" aria-label="Reservations" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-card p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 adire-pattern opacity-[0.06]" aria-hidden="true" />
          <div className="relative">
            <div className="max-w-2xl">
              <SectionLabel>Reservations</SectionLabel>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Book a table.
              </h2>
              <p className="mt-4 text-base text-foreground/75">
                Tell us when you'd like to come — we'll confirm by WhatsApp
                within the hour.
              </p>
            </div>

            {sent ? (
              <div className="mt-10 rounded-2xl border border-gold/40 bg-background/60 p-6 text-center" role="status" aria-live="polite">
                <div className="font-display text-2xl text-gold">
                  Thank you
                </div>
                <p className="mt-2 text-sm text-foreground/80">
                  Your reservation request has been received. We'll be in touch
                  shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-10 grid gap-5 sm:grid-cols-2"
              >
                <Field
                  label="Full name"
                  name="name"
                  placeholder="Adaeze Okafor"
                  required
                  aria-required="true"
                />
                <Field
                  label="Phone or email"
                  name="contact"
                  placeholder="+234 ..."
                  type="text"
                  inputMode="tel"
                  required
                  aria-required="true"
                />
                <Field label="Date" name="date" type="date" required aria-required="true" />
                <Field label="Time" name="time" type="time" required aria-required="true" />
                <Field
                  label="Guests"
                  name="guests"
                  type="number"
                  min={1}
                  max={20}
                  defaultValue={2}
                  required
                  aria-required="true"
                />
                <Field
                  label="Occasion (optional)"
                  name="occasion"
                  placeholder="Birthday, anniversary…"
                />

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="Dietary notes, table preference…"
                    className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
                >
                  Confirm Reservation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
