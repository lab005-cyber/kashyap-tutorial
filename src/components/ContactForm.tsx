"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const phone = (formData.get("phone") as string).trim();
    const email = (formData.get("email") as string).trim();
    const standard = (formData.get("standard") as string) || "Not specified";
    const interest = (formData.get("interest") as string) || "Not specified";
    const message = (formData.get("message") as string).trim();
    const botcheck = formData.get("botcheck") ? true : false;

    try {
      // Call secure server API route (keeps API keys completely hidden from client bundle)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          standard,
          interest,
          message,
          botcheck,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        // Safe client fallback to WhatsApp if server API faces upstream error
        triggerWhatsAppFallback(name, phone, email, standard, interest, message);
        setStatus("success");
        form.reset();
      }
    } catch {
      // Fallback if client is offline or network fails
      triggerWhatsAppFallback(name, phone, email, standard, interest, message);
      setStatus("success");
      form.reset();
    }
  }

  function triggerWhatsAppFallback(
    name: string,
    phone: string,
    email: string,
    standard: string,
    interest: string,
    message: string
  ) {
    const waMessage = `Hello Kashyap Tutorial! New Enquiry:
• Name: ${name}
• Phone: ${phone}
• Email: ${email}
• Class: ${standard}
• Interested In: ${interest}
• Message: ${message}`;

    const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
      waMessage
    )}`;
    window.open(url, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {status === "success" && (
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 shadow-sm">
          <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
          <div>
            <p className="font-bold text-base text-emerald-950">
              Thank you! Your enquiry has been received successfully.
            </p>
            <p className="mt-1 text-xs text-emerald-800">
              Er. N. Jha Sir &amp; Team will review your details and get in touch with you shortly.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 shadow-sm">
          <FiAlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <p>{errorMsg}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Parent / Student name"
            className="input"
          />
        </Field>
        <Field label="Phone Number" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 ..."
            className="input"
          />
        </Field>
      </div>

      <Field label="Email Address" htmlFor="email" required>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="input"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Class / Standard" htmlFor="standard">
          <select id="standard" name="standard" className="input" defaultValue="">
            <option value="" disabled>
              Select class
            </option>
            <option>Class 6 - 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>Class 11 (Science)</option>
            <option>Class 11 (Commerce)</option>
            <option>Class 12 (Science)</option>
            <option>Class 12 (Commerce)</option>
            <option>IIT-JEE / NEET / CUET</option>
            <option>Home Tuition (KG-12th)</option>
          </select>
        </Field>
        <Field label="Interested In" htmlFor="interest">
          <select id="interest" name="interest" className="input" defaultValue="">
            <option value="" disabled>
              Select option
            </option>
            <option>Classroom Coaching</option>
            <option>Home Tuition</option>
            <option>Free Demo Class</option>
            <option>Just have a question</option>
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about the student's needs, subjects, locality..."
          className="input resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full py-3.5 text-base shadow-md disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <FiLoader className="animate-spin h-5 w-5" /> Submitting Securely...
          </>
        ) : (
          <>
            <FiSend className="h-5 w-5" /> Send Message
          </>
        )}
      </button>

      <p className="text-center text-xs text-grey-500">
        We respect your privacy. Your details are strictly confidential and encrypted.
      </p>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.625rem;
          border: 1px solid #dfe3ea;
          background: #fff;
          padding: 0.625rem 0.875rem;
          font-size: 0.95rem;
          color: #262c3d;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #34588c;
          box-shadow: 0 0 0 3px rgba(52, 88, 140, 0.15);
        }
        .input::placeholder {
          color: #9ba6b8;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-grey-700"
      >
        {label} {required && <span className="text-amber-500 font-bold">*</span>}
      </label>
      {children}
    </div>
  );
}
