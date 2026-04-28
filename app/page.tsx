"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ServiceCards from "./components/ServiceCards";
import VisibilityTitle from "./components/VisibilityTitle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" }
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.24 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-atelier-bg text-atelier-text grain-overlay">
      <VisibilityTitle />

      <header className="sticky top-0 z-50 border-b border-atelier-muted/20 bg-atelier-bg/70 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#top" aria-label="Backend Atelier home">
            <img src="/logo-wordmark-dark.svg" alt="Backend Atelier" className="h-8 w-auto md:h-9" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="link-underline text-xs uppercase tracking-[0.18em] text-atelier-text/85">
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-atelier-highlight/80 px-4 py-2 text-xs uppercase tracking-[0.16em] text-atelier-highlight transition-all duration-300 hover:bg-atelier-highlight hover:text-atelier-text"
            >
              Book Call
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full border border-atelier-muted/40 px-3 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-atelier-text md:hidden"
          >
            Menu
          </button>
        </div>
        {menuOpen && (
          <div className="section-shell pb-5 md:hidden">
            <div className="rounded-2xl border border-atelier-muted/25 bg-atelier-bg/95 p-4">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-sm tracking-[0.12em] text-atelier-text/90"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="section-shell section-space pb-20 pt-14 md:pt-24">
        <div className="hero-grid relative overflow-hidden rounded-[2rem] border border-atelier-muted/25 px-6 py-12 md:px-12 md:py-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }}>
            <p className="text-xs uppercase tracking-[0.23em] text-atelier-muted">Backend Atelier • Systems consultancy</p>
            <h1 className="mt-5 max-w-5xl font-serif text-[2.9rem] leading-[0.88] md:text-[6rem]">
              I organise the backend of your business so it can scale beautifully.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-atelier-text/85 md:text-lg">
              Operational design for founders and small teams: systems, workflows, dashboards, and structure that move you from chaos to calm.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-atelier-highlight px-7 py-3 text-sm font-medium tracking-[0.1em] text-atelier-text transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(249,36,36,0.35)]"
              >
                Start your backend reset
              </a>
              <a
                href="#services"
                className="rounded-full border border-atelier-muted/50 px-6 py-3 text-sm tracking-[0.1em] text-atelier-text transition-colors duration-300 hover:border-atelier-highlight hover:text-atelier-highlight"
              >
                View services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 grid max-w-2xl gap-3 md:ml-auto md:mt-14"
          >
            {[
              "Workflow architecture",
              "Founder dashboard clarity",
              "Backend operations calm"
            ].map((item) => (
              <div key={item} className="rounded-xl border border-atelier-muted/30 bg-atelier-bg/75 px-4 py-3 text-xs uppercase tracking-[0.16em] text-atelier-text/82">
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-atelier-muted">
          <span>Scroll</span>
          <span className="scroll-cue" aria-hidden="true" />
        </div>
      </section>

      <section id="services" className="section-shell section-space bg-atelier-bg">
        <motion.div {...reveal} className="editorial-divider pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-atelier-muted">Services</p>
          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-[0.92] md:text-[4.6rem]">
            Premium backend systems for brands ready to operate like a studio.
          </h2>
          <ServiceCards />
        </motion.div>
      </section>

      <section id="about" className="section-shell section-space bg-atelier-bg">
        <motion.div {...reveal} className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div className="luxury-panel rounded-[1.7rem] p-8 text-atelier-darkText md:p-12">
            <p className="text-xs uppercase tracking-[0.19em] text-atelier-darkText/65">Positioning</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
              Backend Atelier designs the systems behind the business.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-atelier-darkText/82 md:text-lg">
              Dashboards, workflows, content structures, process design, and operational clarity that help founders move from chaos to calm.
            </p>
          </div>
          <blockquote className="border-l border-atelier-highlight/60 pl-6 pt-4 font-serif text-2xl leading-snug text-atelier-text/95 md:mt-8 md:text-4xl">
            “Beautiful brands deserve backend systems that feel just as intentional.”
          </blockquote>
        </motion.div>
      </section>

      <section id="proof" className="section-shell section-space bg-atelier-bg">
        <motion.div {...reveal} className="editorial-divider pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-atelier-muted">Featured outcomes</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                label: "Launch Operations",
                title: "From scattered launch tasks to one controlled operating rhythm.",
                outcome: "Reduced launch bottlenecks and faster team handoffs across campaigns."
              },
              {
                label: "Dashboard Visibility",
                title: "Turned disconnected data points into one founder-facing command center.",
                outcome: "Improved weekly decision quality and clearer growth priorities."
              },
              {
                label: "Process Documentation",
                title: "Mapped undocumented team knowledge into reusable systems.",
                outcome: "Created smoother onboarding and more consistent operational output."
              }
            ].map((item, idx) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-atelier-muted/30 bg-[#4b081f] p-6"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-atelier-highlight">{item.label}</p>
                <h3 className="mt-4 font-serif text-2xl leading-tight">{item.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-atelier-text/82">{item.outcome}</p>
                <span className="mt-6 inline-block text-xs uppercase tracking-[0.15em] text-atelier-muted transition-colors duration-300 group-hover:text-atelier-highlight">
                  Outcome-led build
                </span>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <footer id="contact" className="section-shell pb-14 pt-24">
        <motion.div {...reveal} className="rounded-[2rem] border border-atelier-muted/30 bg-atelier-bg p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.19em] text-atelier-muted">Backend Atelier</p>
          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-[0.9] md:text-[5rem]">Ready to clean up the backend?</h2>
          <p className="mt-6 max-w-xl text-base text-atelier-text/82 md:text-lg">Let’s make your business feel lighter, clearer, and easier to run.</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@backendatelier.com"
              className="rounded-full bg-atelier-highlight px-7 py-3 text-sm tracking-[0.09em] text-atelier-text transition-all duration-300 hover:-translate-y-1"
            >
              hello@backendatelier.com
            </a>
            <span className="text-sm tracking-[0.09em] text-atelier-muted">Cape Town, South Africa · Working worldwide</span>
          </div>

          <div className="mt-10 h-px w-full bg-gradient-to-r from-atelier-highlight/50 to-transparent" />
        </motion.div>
      </footer>
    </main>
  );
}
