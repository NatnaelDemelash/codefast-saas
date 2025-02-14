"use client";

import { useState } from "react";

export default function FAQListItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li key={faq.question} className="py-6 border-b border-slate-700 ">
      {/* Clickable Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl mb-4 w-full text-yellow-100 flex justify-between items-center"
      >
        <p> {faq.question}</p>

        {isOpen ? "-" : "+"}
      </button>

      <div className={`${isOpen ? "block" : "hidden"}`}>{faq.answer}</div>
    </li>
  );
}
