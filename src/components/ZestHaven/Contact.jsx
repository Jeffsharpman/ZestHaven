import { useState, useRef } from "react";
import { Send, Loader, Check } from "lucide-react";
import SectionLabel from "./SectionLabel";

function encode(data) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

function validate(name, email) {
  const errors = {};
  if (!name.trim()) errors.name = "Name is required.";
  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  return errors;
}

const Contact = () => {
  const form = useRef(null);
  const [state, setState] = useState("idle");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (name === "name" && !value.trim()) {
      setErrors((prev) => ({ ...prev, name: "Name is required." }));
    } else if (name === "email") {
      if (!value.trim()) {
        setErrors((prev) => ({ ...prev, email: "Email is required." }));
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    } else {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const validation = validate(name, email);

    setTouched({ name: true, email: true });
    setErrors(validation);

    if (validation.name || validation.email) return;

    setState("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...Object.fromEntries(formData),
        }),
      });
      setState("sent");
    } catch {
      setState("error");
    }
  };

  return (
    <section id="contact" aria-label="Contact us" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-lg text-center">
          <SectionLabel>
            <span className="mx-auto">Get in touch</span>
          </SectionLabel>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Send us a message.
          </h2>
          <p className="mt-4 text-base text-foreground/75">
            Questions, feedback, or just saying hello — we&rsquo;d love to hear from
            you.
          </p>
        </div>

        {state === "sent" ? (
          <div className="mx-auto mt-12 max-w-md rounded-2xl border border-gold/40 bg-background/60 p-8 text-center" role="status" aria-live="polite">
            <Check className="mx-auto h-10 w-10 text-gold" aria-hidden="true" />
            <div className="mt-4 font-display text-2xl text-gold">
              Message sent!
            </div>
            <p className="mt-2 text-sm text-foreground/80">
              Thanks for reaching out. We&rsquo;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form
            ref={form}
            name="contact"
            method="POST"
            data-netlify="true"
            noValidate
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-md space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                aria-required="true"
                aria-invalid={touched.name && errors.name ? "true" : undefined}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                onBlur={handleBlur}
                onChange={() => errors.name && setErrors((prev) => ({ ...prev, name: undefined }))}
                className={`w-full rounded-2xl border bg-background/50 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-gold ${
                  touched.name && errors.name ? "border-destructive" : "border-border"
                }`}
              />
              {touched.name && errors.name && (
                <p id="contact-name-error" className="mt-1.5 text-xs text-destructive" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                aria-required="true"
                aria-invalid={touched.email && errors.email ? "true" : undefined}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                onBlur={handleBlur}
                onChange={() => errors.email && setErrors((prev) => ({ ...prev, email: undefined }))}
                className={`w-full rounded-2xl border bg-background/50 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-gold ${
                  touched.email && errors.email ? "border-destructive" : "border-border"
                }`}
              />
              {touched.email && errors.email && (
                <p id="contact-email-error" className="mt-1.5 text-xs text-destructive" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {state === "error" && (
              <p className="text-sm text-destructive" role="alert">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={state === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === "sending" ? (
                <><Loader className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…</>
              ) : (
                <><Send className="h-4 w-4" aria-hidden="true" /> Send Message</>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;