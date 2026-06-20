"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import projectsData from "@/data/projectsData.json";
import { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const { t } = useLanguage();
  const featured = (projectsData as Project[]).filter((p) => p.featured);

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subheading">{t.projects.featuredSubheading}</p>
          <h2 className="section-heading mb-14">{t.projects.featuredHeading}</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured
            />
          ))}
        </div>
      </div>
    </section>
  );
}
