"use client";
import { motion } from "framer-motion";

const chips = [
  { label: "Data Management", teal: true },
  { label: "App Development", teal: true },
  { label: "Process Simulation", teal: true },
  { label: "Bologna, Italy", teal: false },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ lang }: { lang: "en" | "it" }) {
  const t = {
    en: {
      eyebrow: "Management & Operations Consultant · Inema",
      h1: ["Data consultant", "& app builder."],
      sub: "I help companies work better with their own data — building tools, planning systems, and AI integrations that actually get used.",
      cta: "View projects",
      cta2: "Get in touch",
    },
    it: {
      eyebrow: "Management & Operations Consultant · Inema",
      h1: ["Consulente dati", "& sviluppatore app."],
      sub: "Aiuto le aziende a lavorare meglio con i propri dati — costruendo strumenti, sistemi di pianificazione e integrazioni AI che vengono davvero usati.",
      cta: "Vedi i progetti",
      cta2: "Contattami",
    },
  }[lang];

  return (
    <section
      id="about"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 24px 60px" }}
    >
      <div style={{ width: "100%", maxWidth: 768, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: 48, alignItems: "center", justifyContent: "space-between" }}>

          {/* Text */}
          <div style={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}
            >
              <span style={{ width: 22, height: 1.5, background: "var(--teal)", borderRadius: 2, display: "block" }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--teal)" }}>
                {t.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: 16 }}
            >
              <span style={{ color: "var(--text-primary)" }}>{t.h1[0]}</span>
              <br />
              <span style={{ color: "var(--text-faint)" }}>{t.h1[1]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease }}
              style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: 400, marginBottom: 24 }}
            >
              {t.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42, ease }}
              style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 28 }}
            >
              {chips.map((c) => (
                <span key={c.label} style={{
                  fontSize: 11, padding: "5px 12px", borderRadius: 20,
                  color: c.teal ? "var(--teal-dark)" : "var(--text-muted)",
                  background: c.teal ? "var(--teal-bg)" : "rgba(138,155,168,0.08)",
                  border: `0.5px solid ${c.teal ? "var(--teal-border)" : "rgba(138,155,168,0.2)"}`,
                }}>
                  {c.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52, ease }}
              style={{ display: "flex", gap: 10 }}
            >
              <a href="#projects" style={{
                fontSize: 13, fontWeight: 500, padding: "10px 22px", borderRadius: 12,
                background: "var(--teal)", color: "#fff", textDecoration: "none",
              }}>
                {t.cta}
              </a>
              <a href="#contact" style={{
                fontSize: 13, padding: "10px 22px", borderRadius: 12, textDecoration: "none",
                color: "var(--text-secondary)", background: "rgba(255,255,255,0.8)",
                border: "0.5px solid rgba(0,0,0,0.1)",
              }}>
                {t.cta2}
              </a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            style={{
              width: 240, height: 240, borderRadius: 28, flexShrink: 0,
              overflow: "hidden", boxShadow: "var(--card-shadow)",
            }}
          >
            <img
              src="/avatar.gif"
              alt="Alessandro Botti"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
