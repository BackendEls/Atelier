"use client";

import { motion } from "framer-motion";
import AnimatedFooter from "./components/AnimatedFooter";
import PremiumButton from "./components/PremiumButton";
import ScrambleText from "./components/ScrambleText";
import Section from "./components/Section";
import SelectedSystemTile from "./components/SelectedSystemTile";
import ServiceCards from "./components/ServiceCards";
import VisibilityTitle from "./components/VisibilityTitle";

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Systems", href: "#systems" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" }
];

const systems = [
  ["Content Architecture", "Scalable CMS ecosystems and editorial workflows."],
  ["Commerce Operations", "Structured product systems designed for modern e-commerce environments."],
  ["Founder Dashboards", "Operational visibility for fast-moving businesses."],
  ["Workflow Design", "Systems that reduce operational friction and increase clarity across teams."]
] as const;

export default function Home() {
  return (
    <main className="site-root">
      <VisibilityTitle />

      <header className="nav-shell">
        <a href="#top" className="logo-wrap" aria-label="Backend Atelier home">
          <ScrambleText text="Backend Atelier" className="logo-text" speed={24} />
        </a>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              <ScrambleText text={link.label} className="nav-link-text" speed={30} />
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero-screen section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Digital Systems Atelier</p>
          <h1 className="hero-title">Designing the systems behind modern brands.</h1>
          <p className="hero-copy">
            Backend Atelier architects operational infrastructure, digital ecosystems, and structured workflows for founder-led businesses ready to scale with clarity.
          </p>
          <div className="hero-cta-row">
            <PremiumButton href="#philosophy" text="Enter the Atelier" />
            <PremiumButton href="#selected-systems" text="View Selected Systems" variant="secondary" />
          </div>
        </motion.div>
      </section>

      <Section id="philosophy" label="Philosophy" title="Beautiful brands break when their systems cannot scale.">
        <div className="prose-block">
          <p>Most businesses focus on what is visible.</p>
          <p>The brand.<br />The campaign.<br />The launch.</p>
          <p>
            But behind every modern brand is an operational foundation determining how efficiently it can move, grow, and evolve.
          </p>
          <p>
            Backend Atelier designs the systems behind the scenes: operational structure, digital workflows, commerce infrastructure, content ecosystems, and founder operations, built with clarity, elegance, and long-term scalability in mind.
          </p>
        </div>
      </Section>

      <section id="systems" className="section-space">
        <div className="section-shell">
          <p className="section-label">What We Design</p>
          <ServiceCards />
        </div>
      </section>

      <Section
        id="selected-systems"
        label="Selected Systems"
        title="A curated selection of operational structures, digital ecosystems, and backend frameworks designed for modern brands."
      >
        <div className="systems-grid">
          {systems.map(([title, body]) => (
            <SelectedSystemTile key={title} title={title} body={body} />
          ))}
        </div>
      </Section>

      <Section id="approach" label="Approach" title="Structure creates freedom.">
        <div className="prose-block">
          <p>Backend Atelier approaches operations as a design discipline.</p>
          <p>
            The goal is not simply efficiency. It is creating systems that feel intuitive, sustainable, scalable, and aligned with the way modern brands actually operate.
          </p>
          <p>
            Every workflow, structure, and ecosystem is intentionally designed to reduce friction and create clarity behind the scenes.
          </p>
          <p>Because when operational foundations are built properly, brands move differently.</p>
        </div>
      </Section>

      <Section id="founder" label="Founder" title="Built from the intersection of systems, commerce, and creative operations.">
        <div className="prose-block">
          <p>
            Backend Atelier was founded through years of experience working across digital commerce, content ecosystems, product operations, and founder-led brand environments.
          </p>
          <p>
            The studio exists to bridge the gap between operational intelligence and elevated digital experiences.
          </p>
          <p>
            Combining systems thinking with a refined editorial approach, Backend Atelier helps modern brands build infrastructure designed not only to function well, but to scale intentionally.
          </p>
        </div>
      </Section>

      <AnimatedFooter />
    </main>
  );
}
