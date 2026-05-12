"use client";

import { motion } from "framer-motion";
import AnimatedFooter from "./components/AnimatedFooter";
import ScrambleText from "./components/ScrambleText";
import ServiceCards from "./components/ServiceCards";
import VisibilityTitle from "./components/VisibilityTitle";

const navItems = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Services", "#services"]
] as const;

export default function Home() {
  return (
    <main className="cine-root">
      <VisibilityTitle />

      <header className="cine-nav">
        <a href="#top" className="cine-logo"><ScrambleText text="Backend Atelier*" speed={30} /></a>
        <nav className="cine-center-nav" aria-label="Primary">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}><ScrambleText text={label} speed={34} /></a>
          ))}
        </nav>
        <a href="#contact" className="cine-talk"><ScrambleText text="Let's Talk →" speed={28} /></a>
      </header>

      <section id="top" className="hero-cinematic">
        <img src="/assets/hero-overhead.jpg" alt="Overhead woman working" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content section-shell">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Digital<br />Systems<br />Atelier
          </motion.h1>
          <p className="hero-sub"><ScrambleText text="Designing the systems behind modern brands" speed={36} /></p>
          <a className="hero-cta" href="#about"><ScrambleText text="Enter the Atelier" speed={30} /><span>↗</span></a>
        </div>
      </section>

      <section id="about" className="intro-editorial section-shell">
        <div className="intro-image-wrap">
          <img src="/assets/editorial-bw.jpg" alt="Blurred person near studio wall" className="intro-image" />
        </div>
        <div className="intro-copy">
          <p className="kicker">Backend Atelier*</p>
          <h2>architects operational infrastructure, digital ecosystems, and structured workflows for founder-led businesses ready to scale with clarity.</h2>
          <p>Beautiful brands break when their systems cannot scale.</p>
          <p>Most businesses focus on what is visible.</p>
          <p>The brand.<br/>The campaign.<br/>The launch.</p>
          <p>But behind every modern brand is an operational foundation determining how efficiently it can move, grow, and evolve.</p>
          <p>Backend Atelier designs the systems behind the scenes: operational structure, digital workflows, commerce infrastructure, content ecosystems, and founder operations, built with clarity, elegance, and long-term scalability in mind.</p>
          <a href="#services" className="line-btn"><ScrambleText text="Services →" speed={30} /></a>
        </div>
      </section>

      <section id="work" className="marquee-section">
        <p>(3)</p>
        <div className="marquee-track">
          <span>What we do ← What we do → What we do ←</span>
          <span>What we do ← What we do → What we do ←</span>
        </div>
      </section>

      <section id="services" className="services-shell section-shell">
        <ServiceCards />
      </section>

      <AnimatedFooter />
    </main>
  );
}
