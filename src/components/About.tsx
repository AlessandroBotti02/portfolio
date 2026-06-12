"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const timeline = [
  { year: "2025 — present", en: "Management & Operations Consultant", it: "Management & Operations Consultant", place: "Inema · Bologna", active: true },
  { year: "2022 — 2025", en: "M.Sc. Management Engineering", it: "Laurea Magistrale Ing. Gestionale", place: "UniMoRe", active: false },
  { year: "2019 — 2022", en: "B.Sc. Management Engineering", it: "Laurea Triennale Ing. Gestionale", place: "UniMoRe", active: false },
  { year: "2018 — 2025", en: "Operations & Data · Manufacturing", it: "Operations & Data · Manifatturiero", place: "Reggio Emilia", active: false },
];

function Card({ children, delay = 0, inView }: { children: React.ReactNode; delay?: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease }}
      className="card"
      style={{ padding: 24 }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 16 }}>
      {children}
    </p>
  );
}

export default function About({ lang }: { lang: "en" | "it" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const bio = lang === "en"
    ? <>Management Engineer graduated at UniMoRe in 2025. I come from a manufacturing background — years spent understanding how production and logistics actually work, before building tools to improve them. Now I work at <strong style={{ color: "var(--teal-dark)", fontWeight: 500 }}>Inema</strong>, applying data analysis, custom app development and AI integrations to real operational challenges.</>
    : <>Ingegnere Gestionale laureato all'UniMoRe nel 2025. Vengo da un background manifatturiero — anni a capire come funziona davvero la produzione e la logistica, prima di costruire gli strumenti per migliorarla. Oggi lavoro da <strong style={{ color: "var(--teal-dark)", fontWeight: 500 }}>Inema</strong>, applicando analisi dati, sviluppo app e integrazioni AI a problemi operativi reali.</>;

  return (
    <section style={{ padding: "0 24px 24px" }} ref={ref}>
      <div style={{ maxWidth: 768, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>

        <Card delay={0} inView={inView}>
          <SectionLabel>{lang === "en" ? "Who I am" : "Chi sono"}</SectionLabel>
          <p style={{ fontSize: 13, lineHeight: 1.75, color: "var(--text-secondary)" }}>{bio}</p>
        </Card>

        <Card delay={0.08} inView={inView}>
          <SectionLabel>{lang === "en" ? "Background" : "Percorso"}</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {timeline.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 3 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: item.active ? "var(--teal)" : "var(--text-faint)", flexShrink: 0, display: "block" }} />
                  {i < timeline.length - 1 && <span style={{ width: 1, flex: 1, background: "var(--card-border)", marginTop: 4, minHeight: 14, display: "block" }} />}
                </div>
                <div style={{ paddingBottom: 2 }}>
                  <p style={{ fontSize: 10, color: "var(--text-faint)", marginBottom: 2 }}>{item.year}</p>
                  <p style={{ fontSize: 12, fontWeight: 500, color: item.active ? "var(--navy)" : "var(--text-secondary)" }}>
                    {lang === "en" ? item.en : item.it}
                  </p>
                  <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </section>
  );
}
