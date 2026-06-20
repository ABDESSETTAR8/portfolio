"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Credentials() {
  const { t } = useLanguage();

  return (
    <section id="credentials" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">{t.credentials.subheading}</p>
          <h2 className="section-heading mb-14">{t.credentials.heading}</h2>
        </motion.div>

        <div className="relative space-y-8 ps-10
                        before:absolute before:bottom-2 before:start-[15px]
                        before:top-2 before:w-0.5 before:bg-yellow/30">
          {t.credentials.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <span
                className="absolute -start-10 top-4 flex h-8 w-8 items-center justify-center
                           rounded-full border-2 border-yellow bg-blue-dark text-yellow shadow-gold-sm"
              >
                <GraduationCap size={16} />
              </span>

              <div className="card p-6 hover:-translate-y-1">
                <span className="inline-block rounded-full border border-yellow/40
                                 bg-yellow/10 px-3 py-0.5 text-xs font-bold
                                 uppercase tracking-widest text-yellow">
                  {item.year}
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold text-yellow sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-yellow-light/70">
                  {item.institution}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
