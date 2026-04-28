"use client";

import { motion } from "framer-motion";
import ServiceCards from "./components/ServiceCards";
import VisibilityTitle from "./components/VisibilityTitle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Contact", href: "#contact" }
];

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-atelier-bg text-atelier-text grain-overlay">
      <VisibilityTitle />

      <header className="sticky top-0 z-40 border-b border-atelier-muted/35 bg-atelier-bg/80 backdrop-blur-md">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#top" className="inline-flex items-center" aria-label="Backend Atelier home">
            <img src="/logo-wordmark-dark.svg" alt="Backend Atelier" className="h-8 w-auto md:h-9" />
          </a>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-8 text-sm tracking-[0.11em] text-atelier-text/84">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors duration-300 hover:text-atelier-highlight">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section id="top" className="section-shell section-space pt-14 md:pt-24">
        <div className="grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }}>
            <p className="text-xs uppercase tracking-[0.24em] text-atelier-highlight/90">Founder-led backend consultancy</p>
            <motion.h1
              className="mt-5 max-w-4xl font-serif text-[3rem] leading-[0.9] md:text-[5.4rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Operational clarity for modern brands.
            </motion.h1>
            <motion.p
              className="mt-7 max-w-xl text-base leading-relaxed text-atelier-text/82 md:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.8 }}
            >
              The business behind the brand — systems, Shopify, backend operations, dashboards, and structure designed for serious growth.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.8 }}
            >
              <a
                href="#contact"
                className="rounded-full bg-atelier-highlight px-7 py-3 text-sm font-medium tracking-[0.08em] text-atelier-bg transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5ebbc]"
              >
                Book a discovery call
              </a>
              <a
                href="#services"
                className="rounded-full border border-atelier-muted/70 px-6 py-3 text-sm tracking-[0.08em] text-atelier-text transition-colors duration-300 hover:border-atelier-highlight hover:text-atelier-highlight"
              >
                Explore services
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative justify-self-start md:justify-self-end"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <motion.img
              src="/logo-badge-dark.svg"
              alt="Backend Atelier brand badge"
              className="h-40 w-40 rounded-full border border-atelier-muted/45 bg-atelier-bg/55 p-5 shadow-card md:h-56 md:w-56"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-12 inline-flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.22em] text-atelier-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span>Scroll</span>
          <span className="scroll-cue" aria-hidden="true" />
        </motion.div>
      </section>

      <section id="services" className="section-shell section-space pt-10 md:pt-20">
        <motion.div {...fadeUp} className="editorial-divider pt-14">
          <p className="text-xs uppercase tracking-[0.22em] text-atelier-muted">Services</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[0.94] md:text-[4.1rem]">
            Beautiful systems. Serious growth.
          </h2>
          <ServiceCards />
        </motion.div>
      </section>

      <section id="about" className="section-shell section-space md:pt-16">
        <motion.div {...fadeUp} className="editorial-divider grid gap-10 pt-14 md:grid-cols-[0.78fr_1.22fr] md:gap-16">
          <p className="text-xs uppercase tracking-[0.2em] text-atelier-muted">About</p>
          <div className="luxury-panel rounded-2xl p-7 md:p-10">
            <h2 className="font-serif text-3xl leading-tight md:text-5xl">
              Backend Atelier sits where systems, ecommerce operations, and founder execution meet.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-atelier-text/84 md:text-lg">
              We partner closely with modern brands to shape the backend that supports growth: cleaner workflows, stronger dashboards, sharper operational visibility, and practical systems teams can sustain.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="outcomes" className="section-shell section-space pt-10 md:pt-20">
        <motion.div {...fadeUp} className="editorial-divider pt-14">
          <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <p className="text-xs uppercase tracking-[0.2em] text-atelier-muted">Proof / Outcomes</p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Clearer workflows that reduce bottlenecks and repetitive decision fatigue.",
                "Smoother launches with stronger project sequencing and role clarity.",
                "Stronger operational visibility for faster founder-level decisions.",
                "Better backend decisions built on cleaner systems and consistent data."
              ].map((item, idx) => (
                <motion.article
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: idx * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-atelier-muted/45 bg-[#4A3028]/72 p-6"
                >
                  <p className="mb-5 text-xs tracking-[0.18em] text-atelier-highlight/85">0{idx + 1}</p>
                  <p className="text-base leading-relaxed text-atelier-text/90 md:text-lg">{item}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <footer id="contact" className="section-shell pb-14 pt-20 md:pt-24">
        <motion.div {...fadeUp} className="editorial-divider rounded-3xl border border-atelier-muted/35 bg-[#3A241D]/70 p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-atelier-muted">Backend Atelier</p>
          <img
            src="/logo-wordmark-dark.svg"
            alt="Backend Atelier"
            className="mt-5 h-12 w-auto opacity-95 md:h-16"
          />

          <div className="mt-8 grid gap-10 md:grid-cols-[1.35fr_0.65fr]">
            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">The calm backend partner behind exceptional brands.</h2>
              <a
                href="mailto:hello@backendatelier.com"
                className="mt-8 inline-flex rounded-full border border-atelier-highlight/75 px-6 py-3 text-sm tracking-[0.08em] text-atelier-highlight transition-all duration-300 hover:-translate-y-1 hover:bg-atelier-highlight hover:text-atelier-bg"
              >
                hello@backendatelier.com
              </a>
              <p className="mt-6 text-sm text-atelier-text/78 md:text-base">
                Cape Town, South Africa · Working with modern brands worldwide.
              </p>
            </div>

            <ul className="space-y-3 self-end text-sm tracking-[0.08em] text-atelier-text/82">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-all duration-300 hover:pl-1 hover:text-atelier-highlight">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
