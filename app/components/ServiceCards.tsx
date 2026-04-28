"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Systems Strategy",
    description:
      "Design a backend architecture that supports founder decision-making, team clarity, and sustainable scale.",
    tags: ["Infrastructure", "Ops Architecture", "Priorities", "Delivery Rhythm"]
  },
  {
    number: "02",
    title: "Workflow Design",
    description:
      "Build clean workflow pathways across content, ecommerce, and operations so execution feels lighter.",
    tags: ["Automation", "Task Flow", "Team Sync", "Launch Paths"]
  },
  {
    number: "03",
    title: "Dashboard Intelligence",
    description:
      "Translate daily operational signals into useful dashboards that make strategic choices faster.",
    tags: ["Metrics", "Visibility", "Founder Reporting", "Insights"]
  },
  {
    number: "04",
    title: "Notion Operations",
    description:
      "Create premium Notion systems with structure, templates, and documentation your team will actually use.",
    tags: ["Notion Build", "Templates", "Knowledge Base", "SOPs"]
  },
  {
    number: "05",
    title: "Founder Backend Support",
    description:
      "Ongoing strategic backend support for founders moving from reactive work to calm operations.",
    tags: ["Advisory", "Prioritization", "Execution", "Leadership Ops"]
  },
  {
    number: "06",
    title: "Process Documentation",
    description:
      "Map and document the processes that keep launches, teams, and growth channels running smoothly.",
    tags: ["Process Maps", "Documentation", "Training", "Consistency"]
  }
];

export default function ServiceCards() {
  return (
    <div className="mt-14 grid gap-5 md:gap-6">
      {services.map((service, index) => (
        <motion.article
          key={service.number}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className={`group relative overflow-hidden rounded-[1.5rem] border border-[#2A1A1A]/15 bg-atelier-muted p-7 text-atelier-darkText shadow-card transition-shadow duration-300 hover:shadow-lift md:p-9 ${
            index % 2 ? "md:ml-8" : "md:mr-8"
          }`}
        >
          <div className="absolute right-4 top-4 h-16 w-16 rounded-full border border-atelier-highlight/30 opacity-50 transition-all duration-300 group-hover:scale-110 group-hover:border-atelier-highlight/65" />

          <div className="relative z-10 flex items-start justify-between gap-6">
            <span className="text-xs font-medium tracking-[0.22em] text-atelier-darkText/75">{service.number}</span>
            <span className="rounded-full border border-atelier-darkText/20 px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-atelier-darkText/70">
              Atelier Service
            </span>
          </div>

          <h3 className="relative z-10 mt-5 max-w-3xl font-serif text-3xl leading-[0.96] md:text-[2.8rem]">{service.title}</h3>
          <p className="relative z-10 mt-4 max-w-3xl text-sm leading-relaxed text-atelier-darkText/85 md:text-base">
            {service.description}
          </p>

          <ul className="relative z-10 mt-7 flex flex-wrap gap-2.5">
            {service.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-atelier-darkText/20 bg-[#efe4d1] px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.12em] text-atelier-darkText/80"
              >
                {tag}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
