"use client";

import { useState } from "react";
import { FiLink, FiCheck } from "react-icons/fi";

export default function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator?.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback for older browsers
        const ta = document.createElement("textarea");
        ta.value = url;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* silently ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy link"
      className="inline-flex items-center gap-2 rounded-lg bg-grey-100 px-3 py-2 text-xs font-medium text-navy-700 transition-colors hover:bg-navy-800 hover:text-white"
    >
      {copied ? <FiCheck /> : <FiLink />}
      {copied ? "Copied!" : "Copy link"}
    </button>
  );
}
