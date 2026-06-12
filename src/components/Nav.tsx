"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ lang, setLang }: { lang: "en" | "it"; setLang: (l: "en" | "it") => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", justifyContent: "center", padding: "14px 16px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: 768,
          padding: "10px 20px",
          borderRadius: 16,
          background: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.65)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.08), 0 0 0 0.5px rgba(0,0,0,0.08)" : "0 0 0 0.5px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--teal)", display: "block" }} />
          <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>Alessandro Botti</span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  position: "relative",
                  padding: "6px 12px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "var(--teal)" : "var(--text-muted)",
                  textDecoration: "none",
                  background: isActive ? "var(--teal-bg)" : "transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <button
          onClick={() => setLang(lang === "en" ? "it" : "en")}
          style={{
            fontSize: 12,
            fontWeight: 500,
            padding: "5px 12px",
            borderRadius: 20,
            border: "0.5px solid var(--teal-border)",
            background: "var(--teal-bg)",
            color: "var(--teal-dark)",
            cursor: "pointer",
          }}
        >
          {lang === "en" ? "IT" : "EN"}
        </button>
      </div>
    </motion.header>
  );
}
