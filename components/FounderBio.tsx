"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FounderBio() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">{t.bio.subheading}</p>
          <h2 className="section-heading mb-12">{t.bio.heading}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="card relative p-8 sm:p-10"
        >
          <Quote
            className="absolute -top-4 start-8 h-9 w-9 rotate-180 text-yellow/30"
          />
          <div className="space-y-5">
            {t.bio.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.3 }}
                className="text-sm leading-relaxed text-white/80 sm:text-base"
              >
                {para}
              </motion.p>
            ))}
          </div>
          <Quote
            className="absolute -bottom-4 end-8 h-9 w-9 text-yellow/30"
          />
        </motion.div>
      </div>
    </section>
  );
}
