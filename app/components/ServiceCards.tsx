"use client";

import { useEffect, useMemo, useState } from "react";

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
      "Notion builds, dashboards, workflows, and SOPs that make internal decisions faster and clearer.",
    tags: ["Notion", "Dashboards", "Workflows", "SOPs", "Clarity"]
  },
  {
    number: "02",
    title: "Shopify",
    description:
      "Collections, product architecture, and backend cleanup to support merchandising and growth.",
    tags: ["Collections", "Product Data", "Backend Cleanup", "Merch Support"]
  },
  {
    number: "03",
    title: "Operations",
    description:
      "Launch support, project flow, and team organization across the systems that keep momentum real.",
    tags: ["Launches", "Project Flow", "Team Ops", "Processes"]
  },
  {
    number: "04",
    title: "Advisory",
    description:
      "Strategic support for founders who need structure, execution, and confident backend decisions.",
    tags: ["Founder Support", "Structure", "Execution", "Decision-Making"]
  }
];

export default function ServiceCards() {
  const [visibleIds, setVisibleIds] = useState<string[]>([]);

  const observerOptions = useMemo(
    () => ({ threshold: 0.28, rootMargin: "0px 0px -10% 0px" }),
    []
  );

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll("[data-service-id]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-service-id");
        if (!id) return;

        if (entry.isIntersecting) {
          setVisibleIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
        }
      });
    }, observerOptions);

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [observerOptions]);

  return (
    <div className="relative mt-12 space-y-0 pb-10">
      {services.map((service, index) => {
        const isVisible = visibleIds.includes(service.number);
        const elevated = index % 2 === 0;

        return (
          <article
            key={service.number}
            data-service-id={service.number}
            data-visible={isVisible}
            className={`service-layer relative rounded-2xl border border-atelier-muted/40 p-8 md:p-10 shadow-card backdrop-blur-sm ${
              elevated
                ? "bg-atelier-bg/95 md:ml-6"
                : "bg-[#4A3028]/95 md:-ml-4"
            } ${index !== 0 ? "-mt-6 md:-mt-10" : ""} hover:-translate-y-1.5 hover:shadow-lift`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <p className="text-sm tracking-[0.2em] text-atelier-highlight/85">({service.number})</p>
              <span className="text-xs uppercase tracking-[0.16em] text-atelier-muted/90">
                Backend Atelier Service
              </span>
            </div>

            <h3 className="font-serif text-4xl md:text-5xl leading-none text-atelier-text">
              {service.title}
            </h3>
            <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-atelier-text/88">
              {service.description}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {service.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-atelier-muted/50 bg-atelier-bg/55 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-atelier-text/85"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
