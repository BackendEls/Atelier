"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Systems Strategy",
    description:
      "Design the backend architecture that gives founders clarity, operational stability, and a system that scales beautifully.",
    tags: ["Infrastructure", "Decision Systems", "Ops Architecture", "Scaling"]
  },
  {
    number: "02",
    title: "Workflow Design",
    description:
      "Shape clean execution pathways across teams so launches, tasks, and approvals move with confidence.",
    tags: ["Execution Flow", "Automation", "Team Rhythm", "Delivery"]
  },
  {
    number: "03",
    title: "Dashboard Intelligence",
    description:
      "Turn fragmented data into calm, founder-facing visibility with dashboards that support better weekly decisions.",
    tags: ["Reporting", "Visibility", "Metrics", "Insights"]
  },
  {
    number: "04",
    title: "Notion Operations",
    description:
      "Build elegant Notion environments with practical structure, templates, and operating systems your team actually uses.",
    tags: ["Notion Build", "Templates", "Knowledge Base", "SOPs"]
  },
  {
    number: "05",
    title: "Founder Backend Support",
    description:
      "Ongoing strategic backend support for founders who want less noise, stronger systems, and cleaner execution.",
    tags: ["Founder Advisory", "Prioritization", "Operational Support", "Clarity"]
  },
  {
    number: "06",
    title: "Process Documentation",
    description:
      "Map and document the processes behind your business so team handoff, onboarding, and growth stay consistent.",
    tags: ["Process Mapping", "Documentation", "Training", "Consistency"]
  }
];

export default function ServiceCards() {
  return (
    <div className="mt-10" role="list" aria-label="Backend Atelier services">
      {services.map((service, index) => {
        const sandCard = index % 2 === 1;

        return (
          <motion.section
            key={service.number}
            role="listitem"
            aria-label={`${service.number} ${service.title}`}
            className={`relative h-[92vh] md:h-[96vh] ${index !== 0 ? "-mt-[12vh] md:-mt-[14vh]" : ""}`}
            initial={{ opacity: 0.92 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <article
              className={`sticky top-16 mx-auto flex h-[82vh] w-[94vw] max-w-none flex-col overflow-hidden rounded-[2rem] border p-6 md:top-20 md:h-[84vh] md:p-12 ${
                sandCard
                  ? "border-[#2A1A1A]/15 bg-atelier-muted text-atelier-darkText"
                  : "border-atelier-muted/30 bg-atelier-bg text-atelier-text"
              }`}
              style={{ zIndex: index + 1 }}
            >
              <div className="flex h-full flex-col justify-between gap-8 md:grid md:grid-cols-[1.2fr_0.8fr] md:gap-12">
                <div className="space-y-6 md:space-y-8">
                  <p
                    className={`text-lg tracking-[0.2em] md:text-2xl ${
                      sandCard ? "text-atelier-darkText/75" : "text-atelier-highlight"
                    }`}
                  >
                    ({service.number})
                  </p>

                  <h3 className="max-w-3xl font-serif text-[2.3rem] leading-[0.9] md:text-[5rem]">{service.title}</h3>

                  <p className="max-w-2xl text-base font-medium leading-relaxed md:text-xl">{service.description}</p>

                  <ul className="flex flex-wrap gap-2.5">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className={`rounded-full border px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] md:text-xs ${
                          sandCard
                            ? "border-atelier-darkText/20 bg-[#efe4d1] text-atelier-darkText/80"
                            : "border-atelier-muted/40 bg-[#4b081f] text-atelier-text/90"
                        }`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`relative hidden rounded-[1.4rem] border p-6 md:block ${
                    sandCard
                      ? "border-atelier-darkText/20 bg-[#efe4d1]"
                      : "border-atelier-muted/25 bg-[#4b081f]"
                  }`}
                >
                  <div className="grid h-full grid-rows-3 gap-3">
                    {[0, 1, 2].map((panel) => (
                      <div
                        key={panel}
                        className={`rounded-xl border p-3 ${
                          sandCard
                            ? "border-atelier-darkText/15 bg-atelier-muted/70"
                            : "border-atelier-muted/25 bg-atelier-bg/70"
                        }`}
                      >
                        <div className={`mb-3 h-1.5 w-16 rounded-full ${sandCard ? "bg-atelier-highlight/55" : "bg-atelier-highlight/65"}`} />
                        <div className={`h-1 w-full rounded-full ${sandCard ? "bg-atelier-darkText/20" : "bg-atelier-muted/35"}`} />
                        <div className={`mt-2 h-1 w-4/5 rounded-full ${sandCard ? "bg-atelier-darkText/20" : "bg-atelier-muted/35"}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </motion.section>
        );
      })}
    </div>
  );
}
