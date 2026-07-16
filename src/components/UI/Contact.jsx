import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import Eyebrow from "./Eyebrow";
import Card from "./Card";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import FormSubmitButton from "./FormSubmitButton";
import FormSuccess from "./FormSuccess";
import FormError from "./FormError";
import { encodeForm } from "./encodeForm";

function Contact() {
  const form = useRef(null);
  const [state, setState] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({
          "form-name": "contact",
          ...Object.fromEntries(new FormData(form.current)),
        }),
      });
      setState("sent");
    } catch {
      setState("error");
    }
  };

  return (
    <section id="contact" aria-label="Contact us" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, color-mix(in srgb, var(--primary) 10%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="GET IN TOUCH"
          title='Send us a <span class="text-gradient-warm italic">message.</span>'
          sub="Questions about our menu, private events, catering, or partnership opportunities — we respond within 24 hours."
        />

        {state === "sent" ? (
          <FormSuccess
            title="Message sent!"
            message="Thank you for reaching out. We'll get back to you within 24 hours."
          />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <Card variant="glass" rounded="3xl" padding="p-8 md:p-10">
              <form
                ref={form}
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid gap-5 md:grid-cols-2">
                  <FormInput label="NAME" name="name" required placeholder="Your name" />
                  <FormInput label="EMAIL" name="email" type="email" required placeholder="you@example.com" />
                  <FormInput label="PHONE" name="phone" type="tel" placeholder="+234 ..." />
                  <FormInput label="OCCASION" name="occasion" placeholder="Birthday, corporate event..." />
                  <FormTextarea label="YOUR MESSAGE" name="message" rows={4} className="md:col-span-2" placeholder="Tell us about your event, menu preferences, or any specific requirements..." />
                </div>

                <FormError message={state === "error" ? "Something went wrong. Please try again or email us directly at hello@zesthaven.ng." : ""} />

                <FormSubmitButton loading={state === "sending"} className="mt-7">
                  Send Message
                </FormSubmitButton>
              </form>
            </Card>

            <div className="space-y-5">
              {[
                ["LOCATION", "14 Admiralty Way, Lekki Phase 1, Lagos"],
                ["WHATSAPP", "+234 907 028 1022"],
                ["EMAIL", "hello@zesthaven.ng"],
                ["HOURS", "Mon – Sun · 11:00 – 00:00"],
              ].map(([title, value]) => (
                <Card key={title} variant="glass" rounded="2xl" padding="p-5">
                  <Eyebrow as="div" color="primary">{title}</Eyebrow>
                  <div className="mt-1 font-display text-lg text-foreground">
                    {value}
                  </div>
                </Card>
              ))}

              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Instagram", href: "https://www.instagram.com/sharpman_dev" },
                  { label: "TikTok", href: "https://www.tiktok.com/@sharpman.dev" },
                  { label: "X", href: "https://x.com/sharpman_dev" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-card/60 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-gold/50 hover:text-gold"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
