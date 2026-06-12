"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" className="py-8 px-4" ref={ref}>
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass p-6"
        >
          <p className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: "var(--text-faint)" }}>
            {lang === "en" ? "Tools & stack" : "Strumenti & stack"}
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <motion.span
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg"
                style={{
                  color: "var(--text-secondary)",
                  background: "rgba(255,255,255,0.9)",
                  border: "0.5px solid rgba(0,0,0,0.06)",
                }}
                whileHover={{ y: -1, transition: { duration: 0.15 } }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: catColor[tool.cat], opacity: 0.7 }} />
                {tool.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
