"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  { label: "Order A", fill: 70, offset: 4, variant: "primary" },
  { label: "Order B", fill: 48, offset: 22, variant: "dark" },
  { label: "Order C", fill: 38, offset: 42, variant: "light" },
  { label: "Order D", fill: 28, offset: 14, variant: "primary" },
  { label: "Order E", fill: 55, offset: 30, variant: "dark" },
];

export default function GanttMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="rounded-xl p-4"
      style={{ background: "#EEF3F6" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: "#00B4C8" }} />
          <span className="w-2 h-2 rounded-full" style={{ background: "#DDE5EA" }} />
          <span className="w-2 h-2 rounded-full" style={{ background: "#DDE5EA" }} />
        </div>
        <span className="text-xs" style={{ color: "#9AAAB5" }}>Production Schedule</span>
        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(0,180,200,0.1)", color: "#00849A" }}>Live</span>
      </div>
      <div className="flex flex-col gap-2.5">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xs w-14 flex-shrink-0" style={{ color: "#9AAAB5" }}>{row.label}</span>
            <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ background: "#DDE5EA" }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  marginLeft: `${row.offset}%`,
                  background: row.variant === "primary" ? "#00B4C8" : row.variant === "dark" ? "#253545" : "#9AAAB5",
                  opacity: row.variant === "light" ? 0.35 : 1,
                }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${row.fill}%` } : { width: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: row.variant === "primary" ? "#00B4C8" : "#DDE5EA" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
