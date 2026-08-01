"use client";

import { useState } from "react";
import { FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

type Status = "idle" | "loading" | "success" | "error";

// Read from NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY or fallback to official key
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "6975c4b5-f8ba-4946-b461-6525c37c6a8c";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    setSubmittedName(name);

    // Append Web3Forms metadata
    formData.append("access_key", ACCESS_KEY);
    formData.append("from_name", "Kashyap Tutorial Website");
    formData.append("subject", `New Lead from ${name}`);

    try {
      // Direct Web3Forms submission (no extra Vercel server route needed)
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(
          data.message || "Failed to submit enquiry. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your internet connection.");
    }
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
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900 shadow-sm">
          <FiCheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />
          <div>
            <p className="font-bold text-base text-emerald-950">
              Thank you{submittedName ? `, ${submittedName}` : ""}! Your enquiry has been received.
            </p>
            <p className="mt-1 text-xs leading-relaxed text-emerald-800">
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
            <option>Class 6 - 8 Foundation</option>
            <option>Class 9 (CBSE / ICSE)</option>
            <option>Class 10 (Boards)</option>
            <option>Class 11 (PCM / PCB)</option>
            <option>Class 12 (PCM / PCB)</option>
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
            <FiLoader className="animate-spin h-5 w-5" /> Submitting...
          </>
        ) : (
          <>
            <FiSend className="h-5 w-5" /> Submit Enquiry
          </>
        )}
      </button>

      <p className="text-center text-xs text-grey-500">
        We respect your privacy. Your details are strictly confidential and delivered directly to our admin team.
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
