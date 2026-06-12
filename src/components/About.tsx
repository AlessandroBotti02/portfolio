"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const timeline = [
  {
    year: "2025 — present",
    title: "Management & Operations Consultant",
    titleIt: "Management & Operations Consultant",
    place: "Inema · Bologna",
    active: true,
  },
  {
    year: "2022 — 2025",
    title: "M.Sc. Management Engineering",
    titleIt: "Laurea Magistrale in Ingegneria Gestionale",
    place: "Università di Modena e Reggio Emilia",
    active: false,
  },
  {
    year: "2019 — 2022",
    title: "B.Sc. Management Engineering",
    titleIt: "Laurea Triennale in Ingegneria Gestionale",
    place: "Università di Modena e Reggio Emilia",
    active: false,
  },
  {
    year: "2018 — 2025",
    title: "Operations & Data — Manufacturing industry",
    titleIt: "Operations & Data — Settore manifatturiero",
    place: "Reggio Emilia",
    active: false,
  },
];

export default function About({ lang }: { lang: "en" | "it" }) {
  const bio = {
    en: "Management Engineer graduated at UniMoRe in 2025. I come from a manufacturing background — years spent understanding how production and logistics actually work, before building tools to improve them. Now I work at ",
    it: "Ingegnere Gestionale laureato all'UniMoRe nel 2025. Vengo da un background manifatturiero — anni trascorsi a capire come funziona davvero la produzione e la logistica, prima di costruire gli strumenti per migliorarla. Oggi lavoro da ",
  };
  const bio2 = {
    en: ", applying data analysis, custom app development and AI integrations to real operational challenges.",
    it: ", applicando analisi dei dati, sviluppo di app personalizzate e integrazioni AI a problemi operativi concreti.",
  };

  return (
    <section className="py-8 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <FadeIn>
            <div className="glass p-6 h-full">
              <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
                {lang === "en" ? "Who I am" : "Chi sono"}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {bio[lang]}
                <span className="font-medium" style={{ color: "var(--teal-dark)" }}>Inema</span>
                {bio2[lang]}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass p-6 h-full">
              <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
                {lang === "en" ? "Background" : "Percorso"}
              </p>
              <div className="flex flex-col gap-4">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center pt-1">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: item.active ? "var(--teal)" : "var(--text-faint)" }}
                      />
                      {i < timeline.length - 1 && (
                        <span className="w-px flex-1 mt-1" style={{ background: "var(--border)", minHeight: 14 }} />
                      )}
                    </div>
                    <div className="pb-1">
                      <p className="text-xs mb-0.5" style={{ color: "var(--text-faint)" }}>{item.year}</p>
                      <p className="text-xs font-medium" style={{ color: item.active ? "var(--navy)" : "var(--text-secondary)" }}>
                        {lang === "en" ? item.title : item.titleIt}
                      </p>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>{item.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
