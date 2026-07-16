import { useState, useRef } from "react";
import ScrollReveal from "../UI/ScrollReveal";
import Card from "../UI/Card";
import Section from "../UI/Section";
import SectionHeader from "../UI/SectionHeader";
import FormInput from "../UI/FormInput";
import FormTextarea from "../UI/FormTextarea";
import FormSubmitButton from "../UI/FormSubmitButton";
import FormSuccess from "../UI/FormSuccess";
import FormError from "../UI/FormError";
import { encodeForm } from "../UI/encodeForm";

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
        body: encodeForm({ "form-name": "reservation", ...Object.fromEntries(new FormData(form.current)) }),
      });
      setState("sent");
    } catch {
      setState("error");
    }
  };

  return (
    <Section id="reserve" label="Reservations" className="max-w-5xl mx-auto !px-5 sm:!px-8">
      <ScrollReveal animation="scaleUp">
        <Card variant="accent" rounded="4xl" className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 adire-pattern opacity-[0.06]" aria-hidden="true" />
          <div className="relative">
            <div className="max-w-2xl">
              <SectionHeader eyebrow="RESERVATIONS" title="Book a table." sub="Tell us when you'd like to come — we'll confirm by WhatsApp within the hour. Reservations are recommended for parties of four or more, but walk-ins are always welcome." />
            </div>

            {state === "sent" ? (
              <FormSuccess title="Thank you" message="Your reservation request has been received. We'll confirm your booking via WhatsApp shortly." />
            ) : (
              <form ref={form} name="reservation" method="POST" data-netlify="true" onSubmit={handleSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
                <input type="hidden" name="form-name" value="reservation" />

                <FormInput label="Full name" name="name" placeholder="Adaeze Okafor" required aria-required="true" />
                <FormInput label="Phone or email" name="contact" placeholder="+234 ..." type="text" inputMode="tel" required aria-required="true" />
                <FormInput label="Date" name="date" type="date" required aria-required="true" />
                <FormInput label="Time" name="time" type="time" required aria-required="true" />
                <FormInput label="Guests" name="guests" type="number" min={1} max={20} defaultValue={2} required aria-required="true" />
                <FormInput label="Occasion (optional)" name="occasion" placeholder="Birthday, anniversary..." />

                <FormTextarea label="Message" name="message" rows={3} placeholder="Dietary notes, table preference..." className="sm:col-span-2" />

                <FormError message={state === "error" ? "Something went wrong. Please try again or message us on WhatsApp." : null} />

                <div className="sm:col-span-2 mt-2">
                  <FormSubmitButton loading={state === "sending"} loadingText="Sending...">Confirm Reservation</FormSubmitButton>
                </div>
              </form>
            )}
          </div>
        </Card>
      </ScrollReveal>
    </Section>
  );
};

export default Reserve;
