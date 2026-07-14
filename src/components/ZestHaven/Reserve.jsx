import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader } from "lucide-react";
import SectionLabel from "./SectionLabel";
import ScrollReveal from "../UI/ScrollReveal";

function encode(data) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

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
  const form = useRef(null);
  const [state, setState] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "reservation",
          ...Object.fromEntries(new FormData(form.current)),
        }),
      });
      setState("sent");
    } catch {
      setState("error");
    }
  };

  return (
    <section id="reserve" aria-label="Reservations" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <ScrollReveal animation="scaleUp">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-card p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-0 adire-pattern opacity-[0.06]" aria-hidden="true" />
            <div className="relative">
              <div className="max-w-2xl">
                <SectionLabel>Reservations</SectionLabel>
                <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Book a table.
                </h2>
                <p className="mt-4 text-base text-foreground/75">
                  Tell us when you&apos;d like to come — we&apos;ll confirm by WhatsApp
                  within the hour. Reservations are recommended for parties of
                  four or more, but walk-ins are always welcome.
                </p>
              </div>

              {state === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-10 rounded-2xl border border-gold/40 bg-background/60 p-6 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="font-display text-2xl text-gold">
                    Thank you
                  </div>
                  <p className="mt-2 text-sm text-foreground/80">
                    Your reservation request has been received. We&apos;ll confirm
                    your booking via WhatsApp shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  ref={form}
                  name="reservation"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="mt-10 grid gap-5 sm:grid-cols-2"
                >
                  <input type="hidden" name="form-name" value="reservation" />

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
                    placeholder="Birthday, anniversary..."
                  />

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      placeholder="Dietary notes, table preference..."
                      className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-gold"
                    />
                  </div>

                  {state === "error" && (
                    <p className="sm:col-span-2 text-sm text-destructive" role="alert">
                      Something went wrong. Please try again or message us on WhatsApp.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state === "sending" ? (
                      <><Loader className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending...</>
                    ) : (
                      <>Confirm Reservation <ArrowRight className="h-4 w-4" aria-hidden="true" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Reserve;
