"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Project, localized } from "@/lib/types";
import ProjectIcon from "./ProjectIcon";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
}) {
  const { locale, t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      className="card flex h-full flex-col p-6"
    >
      {/* Header */}
      <div className="mb-5 flex items-start justify-between gap-3">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl
                     border-2 border-yellow/40 bg-yellow/10 text-yellow"
        >
          <ProjectIcon name={project.icon} size={22} />
        </span>
        <span
          className="rounded-full border border-yellow/30 bg-yellow/10 px-3 py-1
                     text-[11px] font-bold uppercase tracking-wider text-yellow"
        >
          {t.projects.categories[project.category]}
        </span>
      </div>

      <h3 className="font-serif text-lg font-bold text-yellow leading-snug">
        {localized(project.title, locale)}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
        {localized(project.description, locale)}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-yellow/20 bg-blue-darker/50
                       px-2.5 py-0.5 text-[11px] text-white/60"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-5 flex gap-5 border-t border-yellow/10 pt-4">
        <a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-semibold text-yellow
                     transition-colors hover:text-yellow-light"
        >
          <ExternalLink size={15} />
          {t.projects.viewProject}
        </a>
        <a
          href={project.links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-white/50
                     transition-colors hover:text-yellow"
        >
          <Github size={15} />
          GitHub
        </a>
      </div>
    </motion.div>
  );
}
