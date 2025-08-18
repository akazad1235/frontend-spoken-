import Link from "next/link";
import Container from "../Container";
import { Copyright } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "About", href: "#" },
      { name: "Introduction", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Add block", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Terms", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "License", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Contribute", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="rounded-t-3xl border border-t border-[#A1A1AA]/10 bg-[#1A1A2E]/80 py-10 text-white backdrop-blur-md md:rounded-t-[4rem] md:pt-20">
      <Container>
        <div className="grid grid-cols-2 gap-6 px-4 md:grid-cols-5">
          <div>
            {/* logo */}
            <Link href="/" className="text-xl font-extrabold text-[#FFFFFF]">
              LOGO
            </Link>
            <p className="mt-5 text-sm text-[#9CA3AF]">
              Copy-paste UI components that just work - responsive, animated and
              beautifully styled.
            </p>
          </div>

          {footerSections.map((section, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-white">
                {section.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-[#9CA3AF] transition-colors duration-200 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* divider */}
        <div className="mx-auto my-12 h-[1px] w-[75%] bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent"></div>

        {/* copyright info */}
        <div className="flex items-center justify-center gap-1 text-[#9CA3AF]">
          <Copyright size={14} />
          <p className="text-sm">2025 Logo. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
