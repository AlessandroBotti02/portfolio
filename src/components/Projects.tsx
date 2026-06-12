"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import GanttMockup from "./GanttMockup";

export default function Projects({ lang }: { lang: "en" | "it" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-8 px-4" ref={ref}>
      <div className="w-full max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase mb-4 pl-1"
          style={{ color: "var(--text-faint)" }}
        >
          {lang === "en" ? "Selected projects" : "Progetti selezionati"}
        </motion.p>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass overflow-hidden"
            >
              <div className="p-5">
                <GanttMockup />
              </div>

              <div className="px-5 pb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                    {lang === "en" ? project.title : project.titleIt}
                  </h3>
                  <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                    {lang === "en" ? project.industry : project.industryIt}
                    {" · "}
                    {lang === "en" ? "Hybrid production planning" : "Pianificazione produzione ibrida"}
                  </p>
                  <p className="text-xs leading-relaxed mb-3 max-w-lg" style={{ color: "var(--text-secondary)" }}>
                    {lang === "en" ? project.description : project.descriptionIt}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded"
                        style={{ color: "var(--teal-dark)", background: "var(--teal-bg)", border: "0.5px solid var(--teal-border)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs flex-shrink-0 mt-1" style={{ color: "var(--text-faint)" }}>
                  {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
