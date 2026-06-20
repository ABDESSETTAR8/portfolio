"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#credentials", label: t.nav.credentials },
    { href: "#projects",    label: t.nav.projects },
    { href: "#library",     label: t.nav.library },
    { href: "#about",       label: t.nav.about },
  ];

  return (
    <>
      {/* ── Desktop / tablet nav ── */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-5xl items-center justify-between
                     rounded-full border-2 border-yellow bg-blue-darker/80
                     px-4 py-2.5 backdrop-blur-md shadow-gold-sm sm:px-6"
        >
          {/* Logo */}
          <a
            href="#home"
            className="font-serif text-base font-bold text-yellow sm:text-lg"
          >
            RMA
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-semibold text-yellow transition-colors
                             hover:text-yellow-light after:absolute after:-bottom-0.5 after:start-0
                             after:h-px after:w-0 after:bg-yellow-light after:transition-all
                             after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="rounded-full border border-yellow/50 p-1.5 text-yellow transition-colors
                         hover:border-yellow hover:bg-yellow/10 md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] z-30 mx-4 overflow-hidden rounded-2xl
                       border-2 border-yellow/60 bg-blue-darker/95 py-4 shadow-gold-sm
                       backdrop-blur-md md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-sm font-semibold text-yellow transition-colors
                           hover:bg-yellow/10"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
