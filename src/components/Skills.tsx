"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    icon: "💾",
    title: "Data Management",
    titleIt: "Gestione Dati",
    desc: "SQL, KNIME, Excel Advanced, Power BI — from raw data to actionable insights.",
    descIt: "SQL, KNIME, Excel avanzato, Power BI — dai dati grezzi alle decisioni.",
  },
  {
    icon: "⌨️",
    title: "App Development",
    titleIt: "Sviluppo App",
    desc: "React, TypeScript, Python, Streamlit — web apps and local desktop tools.",
    descIt: "React, TypeScript, Python, Streamlit — web app e tool desktop locali.",
  },
  {
    icon: "🧠",
    title: "AI & Knowledge Bases",
    titleIt: "AI & Knowledge Base",
    desc: "Claude integrations, AI training, company knowledge management systems.",
    descIt: "Integrazioni Claude, formazione AI, sistemi di gestione della conoscenza aziendale.",
  },
  {
    icon: "📊",
    title: "Process Simulation",
    titleIt: "Simulazione Processi",
    desc: "AnyLogic — logistics flow modelling and production system optimization.",
    descIt: "AnyLogic — modellazione dei flussi logistici e ottimizzazione dei sistemi produttivi.",
  },
  {
    icon: "🗂️",
    title: "Production Planning",
    titleIt: "Pianificazione Produzione",
    desc: "MES, ERP-MES hybrid systems, scheduling and multi-level approval workflows.",
    descIt: "MES, sistemi ERP-MES ibridi, scheduling e flussi di approvazione multi-livello.",
  },
  {
    icon: "🏭",
    title: "ERP Consulting",
    titleIt: "Consulenza ERP",
    desc: "TeamSystem, Microsoft Business Central — implementation, customization, integration.",
    descIt: "TeamSystem, Microsoft Business Central — implementazione, personalizzazione, integrazione.",
  },
];

export default function Skills({ lang }: { lang: "en" | "it" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-8 px-4" ref={ref}>
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass p-6"
        >
          <p className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: "var(--text-faint)" }}>
            {lang === "en" ? "What I do" : "Cosa faccio"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl p-4 transition-all duration-200 cursor-default group"
                style={{ background: "rgba(255,255,255,0.9)", border: "0.5px solid rgba(0,0,0,0.06)" }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <span className="text-xl mb-3 block">{s.icon}</span>
                <p className="text-xs font-medium mb-1.5" style={{ color: "var(--navy)" }}>
                  {lang === "en" ? s.title : s.titleIt}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
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
