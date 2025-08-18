import Link from "next/link";
import navLinks from "@/data/navLinks";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="fixed top-2 left-0 z-50 w-full px-4">
      <div className="font-inter relative mx-auto flex w-full max-w-5xl items-center justify-between rounded-3xl border border-[#A1A1AA]/10 bg-[#1A1A2E]/80 px-4 py-2 text-sm text-white backdrop-blur-md">
        {/* logo */}
        <Link href="/" className="text-xl font-extrabold text-[#FFFFFF]">
          LOGO
        </Link>

        {/* desktop navlinks */}
        <div className="hidden items-center justify-center gap-4 md:flex">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              className="rounded-full px-4 py-2 font-medium text-[#9CA3AF] transition-colors duration-200 ease-linear hover:bg-[#16213E] hover:text-[#FFFFFF]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* desktop login button */}
        <Link
          href="/login"
          className="hidden rounded-lg bg-indigo-600 px-4 py-2 font-bold text-white transition-all duration-200 ease-linear hover:bg-indigo-700 md:inline-block"
        >
          Login
        </Link>

        {/* mobile navlinks */}
        <MobileNav />
      </div>
    </nav>
  );
}
