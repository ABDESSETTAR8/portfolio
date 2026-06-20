"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import projectsData from "@/data/projectsData.json";
import { Project, ProjectCategory } from "@/lib/types";
import ProjectCard from "./ProjectCard";

const CATEGORIES: ProjectCategory[] = ["AI/ML", "Simulation", "Full-Stack"];

export default function ProjectLibrary() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">(
    "All"
  );

  const projects = projectsData as Project[];

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  const filters: Array<ProjectCategory | "All"> = ["All", ...CATEGORIES];

  return (
    <section id="library" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">{t.projects.librarySubheading}</p>
          <h2 className="section-heading">{t.projects.libraryHeading}</h2>
        </motion.div>

        {/* Filter chips */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full border-2 px-5 py-2 text-sm font-bold
                          transition-all duration-300 ${
                            activeFilter === filter
                              ? "border-yellow bg-gold-gradient text-blue-darker shadow-gold-sm"
                              : "border-yellow/30 text-yellow/70 hover:border-yellow hover:text-yellow"
                          }`}
            >
              {filter === "All"
                ? t.projects.filterAll
                : t.projects.categories[filter]}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
