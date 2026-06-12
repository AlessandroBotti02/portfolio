"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

export default function Home() {
  const [lang, setLang] = useState<"en" | "it">("en");

  return (
    <main className="min-h-screen">
      <Nav lang={lang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Stack lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}
