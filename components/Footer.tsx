"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const MEETING_LINK = "https://meet.google.com/your-meeting-code";
const WHATSAPP_NUMBER = "213XXXXXXXXX";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = "contact@example.com";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const contacts = [
    { href: MEETING_LINK, icon: Calendar, label: t.hero.bookCall },
    { href: WHATSAPP_LINK, icon: MessageCircle, label: t.hero.whatsapp },
    { href: `mailto:${EMAIL}`, icon: Mail, label: t.footer.getInTouch },
  ];

  return (
    <footer
      id="contact"
      className="border-t border-yellow/20 px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl font-extrabold uppercase tracking-wide text-yellow"
        >
          Rached Mohammed Abdessettar
        </motion.span>

        <p className="text-sm font-medium text-white/60">{t.footer.tagline}</p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {contacts.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-yellow/40
                         px-5 py-2.5 text-sm font-semibold text-yellow transition-all
                         hover:border-yellow hover:bg-yellow/10 hover:shadow-gold-sm"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/40">
          © {year} Rached Mohammed Abdessettar. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
