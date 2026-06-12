"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import GanttMockup from "./GanttMockup";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects({ lang }: { lang: "en" | "it" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" style={{ padding: "0 24px 24px" }} ref={ref}>
      <div style={{ maxWidth: 768, margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 12, paddingLeft: 2 }}
        >
          {lang === "en" ? "Selected projects" : "Progetti selezionati"}
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="card"
              style={{ overflow: "hidden" }}
            >
              <div style={{ padding: "16px 16px 0" }}>
                <GanttMockup />
              </div>
              <div style={{ padding: "16px 20px 20px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>
                    {lang === "en" ? project.title : project.titleIt}
                  </h3>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 10 }}>
                    {lang === "en" ? project.industry : project.industryIt}
                    {" · "}
                    {lang === "en" ? "Hybrid production planning" : "Pianificazione produzione ibrida"}
                  </p>
                  <p style={{ fontSize: 12, lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: 520, marginBottom: 12 }}>
                    {lang === "en" ? project.description : project.descriptionIt}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: 11, padding: "3px 9px", borderRadius: 6,
                        color: "var(--teal-dark)", background: "var(--teal-bg)",
                        border: "0.5px solid var(--teal-border)",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span style={{ fontSize: 12, color: "var(--text-faint)", flexShrink: 0, marginTop: 2 }}>{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
