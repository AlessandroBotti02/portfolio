"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const skills = [
  { icon: "◈", title: "Data Management", titleIt: "Gestione Dati", desc: "SQL, KNIME, Excel Advanced, Power BI", descIt: "SQL, KNIME, Excel avanzato, Power BI" },
  { icon: "◻", title: "App Development", titleIt: "Sviluppo App", desc: "React, TypeScript, Python, Streamlit", descIt: "React, TypeScript, Python, Streamlit" },
  { icon: "◆", title: "AI & Knowledge Bases", titleIt: "AI & Knowledge Base", desc: "Claude integrations, company KB systems", descIt: "Integrazioni Claude, knowledge base aziendali" },
  { icon: "◉", title: "Process Simulation", titleIt: "Simulazione Processi", desc: "AnyLogic — logistics & production flows", descIt: "AnyLogic — flussi logistici e produttivi" },
  { icon: "▦", title: "Production Planning", titleIt: "Pianificazione", desc: "MES, ERP-MES hybrid, approval workflows", descIt: "MES, sistemi ERP-MES ibridi, scheduling" },
  { icon: "▣", title: "ERP Consulting", titleIt: "Consulenza ERP", desc: "TeamSystem, Business Central", descIt: "TeamSystem, Business Central" },
];

export default function Skills({ lang }: { lang: "en" | "it" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" style={{ padding: "0 24px 24px" }} ref={ref}>
      <div style={{ maxWidth: 768, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="card"
          style={{ padding: 24 }}
        >
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 20 }}>
            {lang === "en" ? "What I do" : "Cosa faccio"}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {skills.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07, ease }}
                whileHover={{ y: -2, transition: { duration: 0.18 } }}
                style={{
                  padding: "16px 14px", borderRadius: 14,
                  background: "rgba(255,255,255,0.95)",
                  border: "0.5px solid rgba(0,0,0,0.07)",
                  cursor: "default",
                }}
              >
                <span style={{ fontSize: 18, color: "var(--teal)", display: "block", marginBottom: 10 }}>{s.icon}</span>
                <p style={{ fontSize: 12, fontWeight: 600, color: "var(--navy)", marginBottom: 5 }}>
                  {lang === "en" ? s.title : s.titleIt}
                </p>
                <p style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5 }}>
                  {lang === "en" ? s.desc : s.descIt}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
