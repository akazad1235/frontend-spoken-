"use client";
import { useState } from "react";
import { LucideChevronDown } from "lucide-react";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import faqs from "@/data/faqs";

export default function Faqs() {
  const [expandedId, setExpandedId] = useState(1);

  return (
    <section className="px-4 py-10 md:py-16">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our language learning platform"
        />

        {/* faqs container */}
        <div className="bg-midnight mx-auto w-full max-w-3xl rounded-xl p-6">
          {faqs.map((faqItem, i) => (
            // faq item
            <div
              key={faqItem.id}
              className={`w-full border-[#1F2937] pb-4 ${faqs.length - 1 === i ? "border-b-0" : "border-b-[1px]"}`}
            >
              <button
                onClick={() => setExpandedId(faqItem.id)}
                className="flex w-full items-center justify-between gap-4 py-4"
              >
                <p className="text-left font-medium text-white">
                  {faqItem.que}
                </p>
                <LucideChevronDown
                  className={`text-lavender shrink-0 transition-all duration-200 ease-linear ${faqItem.id === expandedId && "rotate-180"}`}
                  size={20}
                />
              </button>

              <div
                className={`grid overflow-hidden opacity-100 transition-all duration-200 ease-linear ${faqItem.id === expandedId ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <p className="text-charcoal overflow-hidden text-sm">
                  {faqItem.ans}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
