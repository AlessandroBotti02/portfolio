"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact({ lang }: { lang: "en" | "it" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const content = {
    en: {
      label: "Contact",
      title: "Let's talk.",
      sub: "If you're working on something that involves data, processes, or custom tools — I'm happy to have a conversation.",
      email: "Email",
      linkedin: "LinkedIn",
    },
    it: {
      label: "Contatti",
      title: "Parliamo.",
      sub: "Se stai lavorando su qualcosa che riguarda dati, processi o strumenti personalizzati — sono disponibile a una conversazione.",
      email: "Email",
      linkedin: "LinkedIn",
    },
  };
  const c = content[lang];

  return (
    <section id="contact" className="py-8 px-4 pb-24" ref={ref}>
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass p-8"
        >
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
            {c.label}
          </p>
          <h2 className="text-4xl font-medium tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
            {c.title}
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: "var(--text-secondary)" }}>
            {c.sub}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:alessandro.botti@inema.bo.it"
              className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl no-underline transition-opacity hover:opacity-80"
              style={{ background: "var(--teal)", color: "#fff" }}
            >
              {c.email} ↗
            </a>
            <a
              href="https://linkedin.com/in/alessandro-botti-698b73159"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl no-underline transition-opacity hover:opacity-80"
              style={{ color: "var(--text-secondary)", background: "rgba(255,255,255,0.7)", border: "0.5px solid var(--border)" }}
            >
              {c.linkedin} ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-between items-center mt-6 px-1"
        >
          <span className="text-xs" style={{ color: "var(--text-faint)" }}>
            Alessandro Botti © 2025
          </span>
          <span className="text-xs" style={{ color: "var(--text-faint)" }}>
            Management & Operations Consultant · Inema
          </span>
        </motion.div>
      </div>
    </section>
  );
}
