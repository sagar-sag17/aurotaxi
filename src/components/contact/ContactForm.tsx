"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import FormField, { fieldInputClasses } from "@/components/ui/FormField";
import type { ContactFormInput } from "@/lib/types";

type Errors = Partial<Record<keyof ContactFormInput, string>>;

const INITIAL: ContactFormInput = {
  name: "",
  phone: "",
  email: "",
  pickup: "",
  destination: "",
  date: "",
  time: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormInput>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  function update<K extends keyof ContactFormInput>(key: K, value: ContactFormInput[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (form.phone.trim().length < 7) next.phone = "Please enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (form.pickup.trim().length < 2) next.pickup = "Please enter a pickup location.";
    if (form.destination.trim().length < 2) next.destination = "Please enter a destination.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-blue-light bg-brand-blue-light p-8 text-center">
        <p className="font-serif text-xl font-semibold text-brand-blue">
          Thank you! We&apos;ll get back to you shortly.
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          For an instant response, message us directly on WhatsApp.
        </p>
        <Button
          variant="outline"
          className="mt-6 !text-brand-blue !border-brand-blue hover:!bg-brand-blue hover:!text-white"
          onClick={() => setStatus("idle")}
        >
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Name" htmlFor="contact-name" required error={errors.name}>
          <input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldInputClasses(!!errors.name)}
            placeholder="Your name"
          />
        </FormField>
        <FormField label="Phone Number" htmlFor="contact-phone" required error={errors.phone}>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldInputClasses(!!errors.phone)}
            placeholder="+91 98765 43210"
          />
        </FormField>
      </div>

      <FormField label="Email (optional)" htmlFor="contact-email" error={errors.email}>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={fieldInputClasses(!!errors.email)}
          placeholder="you@example.com"
        />
      </FormField>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Pickup Location" htmlFor="contact-pickup" required error={errors.pickup}>
          <input
            id="contact-pickup"
            type="text"
            value={form.pickup}
            onChange={(e) => update("pickup", e.target.value)}
            className={fieldInputClasses(!!errors.pickup)}
            placeholder="e.g. City Airport"
          />
        </FormField>
        <FormField label="Destination" htmlFor="contact-destination" required error={errors.destination}>
          <input
            id="contact-destination"
            type="text"
            value={form.destination}
            onChange={(e) => update("destination", e.target.value)}
            className={fieldInputClasses(!!errors.destination)}
            placeholder="e.g. Downtown Hotel"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Preferred Date" htmlFor="contact-date">
          <input
            id="contact-date"
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className={fieldInputClasses()}
          />
        </FormField>
        <FormField label="Preferred Time" htmlFor="contact-time">
          <input
            id="contact-time"
            type="time"
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            className={fieldInputClasses()}
          />
        </FormField>
      </div>

      <FormField label="Message" htmlFor="contact-message">
        <textarea
          id="contact-message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          className={fieldInputClasses()}
          placeholder="Any additional details about your trip..."
        />
      </FormField>

      {serverError && (
        <p role="alert" className="text-sm text-red-600">
          {serverError}
        </p>
      )}

      <Button type="submit" variant="secondary" size="lg" disabled={status === "submitting"} className="w-fit">
        {status === "submitting" ? "Sending..." : "Request a Ride"}
      </Button>
    </form>
  );
}
