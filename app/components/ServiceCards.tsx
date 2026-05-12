"use client";

import ServiceScene from "./ServiceScene";

const services = [
  {
    number: "01",
    title: "Operational Ecosystems",
    body: "Internal systems designed to bring clarity to the moving parts of modern businesses. From workflows and team operations to project architecture and process design, we create ecosystems that reduce friction and support sustainable growth."
  },
  {
    number: "02",
    title: "Digital Infrastructure",
    body: "We structure the digital backbone behind modern brands, including CMS architecture, platform systems, content operations, backend workflows, and scalable organisational frameworks."
  },
  {
    number: "03",
    title: "Commerce Systems",
    body: "Product ecosystems designed for operational efficiency and elevated customer experiences, including catalogue organisation, merchandising structures, collection systems, search optimisation, and commerce operations."
  },
  {
    number: "04",
    title: "Founder Operations",
    body: "Designed for founders navigating growth, complexity, and scale. We build structured operational systems that create visibility, clarity, and space for higher-level decision making."
  }
];

export default function ServiceCards() {
  return (
    <div className="service-stack" role="list" aria-label="What we design">
      {services.map((service, index) => (
        <section
          key={service.number}
          role="listitem"
          className={`service-stack-item ${index !== 0 ? "service-stack-overlap" : ""}`}
        >
          <ServiceScene number={service.number} title={service.title} body={service.body} />
        </section>
      ))}
    </div>
  );
}
