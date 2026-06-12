"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", labelIt: "About", href: "#about" },
  { label: "Skills", labelIt: "Skills", href: "#skills" },
  { label: "Projects", labelIt: "Progetti", href: "#projects" },
  { label: "Stack", labelIt: "Stack", href: "#stack" },
  { label: "Contact", labelIt: "Contatti", href: "#contact" },
];

export default function Nav({ lang }: { lang: "en" | "it" }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className="flex items-center justify-between w-full max-w-3xl px-5 py-3 rounded-2xl transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.5)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: "0.5px solid rgba(0,0,0,0.07)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <a href="#" className="flex items-center gap-2 no-underline">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "var(--teal)" }}
          />
          <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            Alessandro Botti
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-1.5 text-xs rounded-lg transition-colors no-underline"
              style={{
                color: active === link.href.slice(1) ? "var(--teal)" : "var(--text-muted)",
                fontWeight: active === link.href.slice(1) ? 500 : 400,
              }}
            >
              {lang === "it" ? link.labelIt : link.label}
              {active === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: "var(--teal-bg)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div
          className="text-xs px-3 py-1.5 rounded-full cursor-pointer font-medium transition-colors"
          style={{ color: "var(--teal)", background: "var(--teal-bg)", border: "0.5px solid var(--teal-border)" }}
        >
          {lang === "en" ? "IT" : "EN"}
        </div>
      </div>
    </motion.nav>
  );
}
