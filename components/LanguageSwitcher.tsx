"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { locales, localeNames, Locale } from "@/lib/i18n/translations";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border-2 border-yellow/70
                   bg-transparent px-3 py-1.5 text-sm font-semibold text-yellow
                   transition-all hover:border-yellow hover:bg-yellow/10"
      >
        <Globe size={15} />
        <span>{locale.toUpperCase()}</span>
        <ChevronDown
          size={13}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute end-0 z-50 mt-2 w-36 overflow-hidden rounded-2xl
                     border-2 border-yellow/50 bg-blue-darker shadow-gold-sm"
        >
          {locales.map((code: Locale) => (
            <button
              key={code}
              onClick={() => {
                setLocale(code);
                setOpen(false);
              }}
              className={`block w-full px-4 py-2.5 text-start text-sm font-medium
                          transition-colors hover:bg-yellow/10 hover:text-yellow ${
                            locale === code
                              ? "bg-yellow/10 text-yellow"
                              : "text-white/80"
                          }`}
            >
              {localeNames[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
