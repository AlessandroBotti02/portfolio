"use client";
import { motion } from "framer-motion";

const chips = [
  { label: "Data Management", color: "teal" },
  { label: "App Development", color: "teal" },
  { label: "Process Simulation", color: "teal" },
  { label: "Bologna, Italy", color: "gray" },
  { label: "IT / EN", color: "gray" },
];

export default function Hero({ lang }: { lang: "en" | "it" }) {
  const content = {
    en: {
      eyebrow: "Management & Operations Consultant · Inema",
      h1a: "Data consultant",
      h1b: "& app builder.",
      sub: "I help companies work better with their own data — building tools, planning systems, and AI integrations that actually get used.",
      cta: "View projects",
      ctaSub: "Get in touch",
    },
    it: {
      eyebrow: "Management & Operations Consultant · Inema",
      h1a: "Consulente dati",
      h1b: "& sviluppatore app.",
      sub: "Aiuto le aziende a lavorare meglio con i propri dati — costruendo strumenti, sistemi di pianificazione e integrazioni AI che vengono davvero usati.",
      cta: "Vedi i progetti",
      ctaSub: "Contattami",
    },
  };
  const c = content[lang];

  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-16 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="block w-5 h-px" style={{ background: "var(--teal)" }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--teal)" }}>
                {c.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl font-medium leading-none tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              {c.h1a}
              <br />
              <span style={{ color: "var(--text-faint)" }}>{c.h1b}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-base leading-relaxed mb-7 max-w-md"
              style={{ color: "var(--text-secondary)" }}
            >
              {c.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {chips.map((chip) => (
                <span
                  key={chip.label}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={
                    chip.color === "teal"
                      ? { color: "var(--teal-dark)", background: "var(--teal-bg)", border: "0.5px solid var(--teal-border)" }
                      : { color: "var(--text-muted)", background: "rgba(138,155,168,0.08)", border: "0.5px solid rgba(138,155,168,0.18)" }
                  }
                >
                  {chip.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <a
                href="#projects"
                className="text-sm font-medium px-5 py-2.5 rounded-xl transition-all no-underline"
                style={{ background: "var(--teal)", color: "#fff" }}
              >
                {c.cta}
              </a>
              <a
                href="#contact"
                className="text-sm px-5 py-2.5 rounded-xl transition-all no-underline"
                style={{ color: "var(--text-secondary)", background: "rgba(255,255,255,0.7)", border: "0.5px solid var(--border)" }}
              >
                {c.ctaSub}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-72 lg:h-72 w-48 h-48 rounded-3xl flex-shrink-0 relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "0.5px solid var(--border)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            }}
          >
            <img
              src="/avatar.gif"
              alt="Alessandro Botti"
              className="w-full h-full object-cover object-top"
              style={{ mixBlendMode: "multiply" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
