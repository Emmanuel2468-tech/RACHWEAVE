
import { useState } from "react";
import { FiMenu, FiX, FiMessageCircle } from "react-icons/fi";

const WHATSAPP_NUMBER = "234XXXXXXXXXX";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/${+2347083385640}`;

  const links = [
    { label: "Home", href: "#home" },
    { label: "Hairstyles", href: "#styles" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-beige bg-cream/95 backdrop-blur">
      <div className="mx-auto flex min-h-[78px] max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#home" className="flex shrink-0 flex-col text-brown">
          <span className="text-xs text-gold">♕</span>
          <span className="font-display text-2xl italic">
            RACHWEAVE
          </span>
          <span className="text-[8px] tracking-[2px]">
            BEAUTY · STYLE · CONFIDENCE
          </span>
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-2xl text-brown md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-1 border-b border-beige bg-cream p-5 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm transition hover:text-gold md:py-2"
            >
              {link.label}
            </a>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm text-white transition hover:bg-brown md:mt-0"
          >
            <FiMessageCircle />
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
