"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// TODO: Replace with your real meeting link (Google Meet / Zoom / Cal.com / Calendly)
const MEETING_LINK = "https://meet.google.com/your-meeting-code";

// TODO: Replace with your real WhatsApp number (digits only, international format)
// Example: 213551234567 for +213 55 123 4567
const WHATSAPP_NUMBER = "213XXXXXXXXX";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center
                 overflow-hidden px-4 pb-20 pt-36 text-center sm:px-6"
    >
      {/* Background decorative circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[500px]
                        -translate-x-1/2 rounded-full bg-yellow/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full
                        bg-yellow/5 blur-2xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full
                        bg-yellow/5 blur-2xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        {/* Portrait — floating animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="animate-float">
            <div
              className="relative h-36 w-36 overflow-hidden rounded-full
                         border-4 border-yellow shadow-gold sm:h-44 sm:w-44 md:h-52 md:w-52"
            >
              <Image
                src="/profile-picture.png"
                alt="Rached Mohammed Abdessettar"
                fill
                sizes="(max-width: 768px) 176px, 208px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-2xl font-extrabold uppercase tracking-wide
                     text-yellow sm:text-3xl md:text-5xl"
        >
          {t.hero.name}
        </motion.h1>

        {/* Role badge */}
        <motion.p
          variants={itemVariants}
          className="mt-3 text-base font-semibold text-yellow-light sm:text-lg md:text-xl"
        >
          {t.hero.title}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={MEETING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn-filled w-full sm:w-auto animate-pulse-glow"
          >
            <Calendar size={18} />
            {t.hero.bookCall}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn w-full sm:w-auto"
          >
            <MessageCircle size={18} />
            {t.hero.whatsapp}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
