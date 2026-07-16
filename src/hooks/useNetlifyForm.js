import { useRef, useState, useCallback } from "react";
import { encodeForm } from "../components/UI/encodeForm";

export function useNetlifyForm(formName) {
  const form = useRef(null);
  const [state, setState] = useState("idle");

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setState("sending");
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodeForm({
            "form-name": formName,
            ...Object.fromEntries(new FormData(form.current)),
          }),
        });
        setState("sent");
      } catch {
        setState("error");
      }
    },
    [formName]
  );

  return { form, state, handleSubmit };
}
