"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const tools = [
  { name: "Excel Advanced", cat: "data" },
  { name: "Power BI", cat: "data" },
  { name: "KNIME", cat: "data" },
  { name: "PostgreSQL", cat: "data" },
  { name: "Python", cat: "dev" },
  { name: "React / TypeScript", cat: "dev" },
  { name: "Streamlit", cat: "dev" },
  { name: "VS Code", cat: "dev" },
  { name: "AnyLogic", cat: "sim" },
  { name: "Business Central", cat: "erp" },
  { name: "TeamSystem", cat: "erp" },
  { name: "Modula WMS", cat: "erp" },
  { name: "Claude / AI", cat: "ai" },
];

const catColor: Record<string, string> = {
  data: "var(--teal)",
  dev: "var(--teal-dark)",
  sim: "#7A9DB0",
  erp: "#9AAAB5",
  ai: "var(--teal)",
};

export default function Stack({ lang }: { lang: "en" | "it" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="stack" style={{ padding: "0 24px 24px" }} ref={ref}>
      <div style={{ maxWidth: 768, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="card"
          style={{ padding: 24 }}
        >
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 18 }}>
            {lang === "en" ? "Tools & stack" : "Strumenti & stack"}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {tools.map((tool, i) => (
              <motion.span
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.04, ease }}
                whileHover={{ y: -1, transition: { duration: 0.15 } }}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  fontSize: 12, padding: "6px 12px", borderRadius: 8,
                  color: "var(--text-secondary)",
                  background: "rgba(255,255,255,0.95)",
                  border: "0.5px solid rgba(0,0,0,0.07)",
                  cursor: "default",
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: catColor[tool.cat], display: "block" }} />
                {tool.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
