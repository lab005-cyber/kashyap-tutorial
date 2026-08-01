"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function WhatsAppWidget() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const waLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Hi Kashyap Tutorial! I'd like to know more about your coaching & home tuition classes."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {showBubble && !dismissed && (
        <div className="flex max-w-[240px] items-start gap-2 rounded-2xl rounded-br-sm border border-grey-200 bg-white p-4 shadow-xl">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold">
            <FaWhatsapp className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-navy-900">Need help?</p>
            <p className="mt-0.5 text-xs leading-relaxed text-grey-600">
              Chat with us on WhatsApp — we reply fast!
            </p>
          </div>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss chat bubble"
            className="text-grey-400 transition-colors hover:text-navy-900"
          >
            <FiX className="h-4 w-4" />
          </button>
        </div>
      )}

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-110"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
        <FaWhatsapp className="relative h-7 w-7" />
      </a>
    </div>
  );
}
