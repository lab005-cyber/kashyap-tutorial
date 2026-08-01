"use client";

import { useState } from "react";
import { FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

type Status = "idle" | "loading" | "success" | "error";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    // Web3Forms required fields
    formData.append("access_key", ACCESS_KEY || "");
    formData.append("from_name", "Kashyap Tutorial Website");
    formData.append("subject", "New enquiry from website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or call us directly.");
    }
  }

  // If no key configured, show a friendly notice but still render form.
  const keyMissing =
    !ACCESS_KEY || ACCESS_KEY.includes("YOUR_WEB3FORMS_ACCESS_KEY_HERE");

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot spam protection (Web3Forms) */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <input type="hidden" name="access_key" value={ACCESS_KEY || ""} />

      {keyMissing && (
        <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <FiAlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <p className="font-semibold">Heads up: Web3Forms key not set.</p>
            <p className="mt-1">
              Add your free access key to <code>.env.local</code> as{" "}
              <code>NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code> for submissions to reach your
              email. Get one at web3forms.com.
            </p>
          </div>
        </div>
      )}

      {status === "success" && (
        <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <p className="font-semibold">Thank you! Your message has been sent.</p>
            <p className="mt-1">We'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <FiAlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
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

      <Field label="Email Address" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
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
            <option>Competitive Exam</option>
            <option>Home Tuition (Other)</option>
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
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <FiLoader className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <FiSend /> Send Message
          </>
        )}
      </button>

      <p className="text-center text-xs text-grey-400">
        We respect your privacy. Your details are only used to respond to your enquiry.
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
        {label} {required && <span className="text-accent-dark">*</span>}
      </label>
      {children}
    </div>
  );
}
