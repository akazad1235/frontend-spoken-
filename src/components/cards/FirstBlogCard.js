import { LucideCalendar, LucideUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FirstBlogCard() {
  return (
    <div className="bg-midnight mx-auto grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-xl md:grid-cols-2 md:gap-8">
      <div className="relative min-h-48 w-full">
        <Image
          src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="people"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 md:px-0 md:py-8">
        <div className="w-fit rounded-full bg-[#312E814D] px-2.5 py-1">
          <p className="text-lavender text-[10.5px]">Learning Tips</p>
        </div>

        <h2 className="mt-3 line-clamp-2 text-xl font-bold text-white">
          5 Tips for Maintaining Conversation in a New Language
        </h2>

        <p className="text-silver mt-4 line-clamp-3 w-full max-w-[400px] text-sm">
          Struggling to keep conversations going? These proven strategies will
          help you maintain longer, more meaningful exchanges in your target
          language.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="text-charcoal flex items-center gap-1 text-sm">
            <LucideCalendar size={16} /> <p>May 15, 2023</p>
          </div>
          <div className="text-charcoal flex items-center gap-1 text-sm">
            <LucideUser size={16} /> <p>Sarah Johnson</p>
          </div>
        </div>

        <Link
          href="/"
          className="bg-purple mt-6 inline-block rounded-md px-6 py-2.5 text-sm text-white"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
