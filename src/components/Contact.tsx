"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact({ lang }: { lang: "en" | "it" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const t = {
    en: {
      label: "Contact",
      title: "Let's talk.",
      sub: "If you're working on something that involves data, processes, or custom tools — I'm happy to have a conversation.",
    },
    it: {
      label: "Contatti",
      title: "Parliamo.",
      sub: "Se stai lavorando su qualcosa che riguarda dati, processi o strumenti personalizzati — sono disponibile a una conversazione.",
    },
  }[lang];

  return (
    <section id="contact" style={{ padding: "0 24px 80px" }} ref={ref}>
      <div style={{ maxWidth: 768, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="card"
          style={{ padding: 36 }}
        >
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 14 }}>
            {t.label}
          </p>
          <h2 style={{ fontSize: 42, fontWeight: 500, letterSpacing: "-0.025em", color: "var(--text-primary)", marginBottom: 12 }}>
            {t.title}
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: 420, marginBottom: 28 }}>
            {t.sub}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a
              href="mailto:alessandro.botti@inema.bo.it"
              style={{
                fontSize: 13, fontWeight: 500, padding: "10px 22px", borderRadius: 12,
                background: "var(--teal)", color: "#fff", textDecoration: "none",
              }}
            >
              Email ↗
            </a>
            <a
              href="https://linkedin.com/in/alessandro-botti-698b73159"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13, padding: "10px 22px", borderRadius: 12, textDecoration: "none",
                color: "var(--text-secondary)",
                background: "rgba(255,255,255,0.8)",
                border: "0.5px solid rgba(0,0,0,0.1)",
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, padding: "0 4px" }}
        >
          <span style={{ fontSize: 11, color: "var(--text-faint)" }}>Alessandro Botti © 2025</span>
          <span style={{ fontSize: 11, color: "var(--text-faint)" }}>Management & Operations Consultant · Inema</span>
        </motion.div>
      </div>
    </section>
  );
}
