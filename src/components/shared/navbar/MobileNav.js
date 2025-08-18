"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import navLinks from "@/data/navLinks";

export default function MobileNav() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleToggleMenu}
        className="cursor-pointer md:hidden text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors"
      >
        {openMenu ? <X /> : <Menu />}
      </button>

      {openMenu && (
        <div className="absolute top-16 left-0 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-xl bg-[#1A1A2E]/95 backdrop-blur-lg border border-[#A1A1AA]/20 px-4 py-8 shadow-2xl">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              onClick={handleToggleMenu}
              className="text-base font-medium text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* mobile login button with pulse */}
          <Link
            href="/login"
            onClick={handleToggleMenu}
            className="w-full rounded-xl bg-[#00D9FF] px-4 py-2 text-center text-base font-bold text-[#0F0F23] transition-all duration-200 ease-linear hover:bg-[#00D9FF]/90 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              Login
            </span>
          </Link>
        </div>
      )}
    </>
  );
}
