"use client";

import { motion } from "framer-motion";

type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Systems",
    description:
      "Notion builds, dashboards, workflows, and SOPs that give teams internal clarity and calm execution.",
    tags: ["Notion", "Dashboards", "Workflows", "SOPs", "Clarity"]
  },
  {
    number: "02",
    title: "Shopify",
    description:
      "Collections, product organization, and backend cleanup that support better merchandising decisions.",
    tags: ["Collections", "Product Data", "Backend Cleanup", "Merchandising"]
  },
  {
    number: "03",
    title: "Operations",
    description:
      "Launch support, project flow, and backend process design that keeps growth organized and sustainable.",
    tags: ["Launches", "Team Flow", "Project Ops", "Processes"]
  },
  {
    number: "04",
    title: "Advisory",
    description:
      "Strategic founder support for brands that need stronger structure, sharper priorities, and clean execution.",
    tags: ["Founder Advisory", "Structure", "Execution", "Prioritization"]
  }
];

export default function ServiceCards() {
  return (
    <div className="relative mt-12 space-y-0 pb-8 md:pb-12">
      {services.map((service, index) => {
        const offsetClass = index % 2 === 0 ? "md:ml-8" : "md:-ml-6";

        return (
          <motion.article
            key={service.number}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`group relative rounded-[1.35rem] border border-atelier-muted/45 px-6 py-7 md:px-10 md:py-10 shadow-card ${
              index % 2 === 0 ? "bg-atelier-bg/90" : "bg-[#4A3028]/90"
            } ${offsetClass} ${index !== 0 ? "-mt-4 md:-mt-8" : ""}`}
          >
            <div className="absolute inset-0 rounded-[1.35rem] ring-1 ring-transparent transition-all duration-300 group-hover:ring-atelier-highlight/35" />

            <div className="relative z-10 flex items-start justify-between gap-6">
              <span className="text-xs tracking-[0.2em] text-atelier-highlight/90">({service.number})</span>
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-atelier-muted/90">Service</span>
            </div>

            <h3 className="relative z-10 mt-4 font-serif text-4xl leading-[0.95] md:text-[3.1rem]">
              {service.title}
            </h3>
            <p className="relative z-10 mt-5 max-w-3xl text-sm leading-relaxed text-atelier-text/86 md:text-base">
              {service.description}
            </p>

            <ul className="relative z-10 mt-7 flex flex-wrap gap-2.5">
              {service.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-atelier-muted/55 bg-atelier-bg/45 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-atelier-text/88"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.article>
        );
      })}
    </div>
  );
}
