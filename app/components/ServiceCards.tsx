"use client";

import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

const services = [
  {
    number: "01",
    title: "Operational Ecosystems",
    body: "We design the operational backbone that brings structure, clarity, and scalability to your business.",
    image: "/assets/editorial-bw.jpg"
  },
  {
    number: "02",
    title: "Digital Infrastructure",
    body: "We build secure, flexible digital foundations that power growth and adapt to complexity.",
    image: "/assets/hero-overhead.jpg"
  },
  {
    number: "03",
    title: "Commerce Systems",
    body: "From storefront to fulfilment, we architect commerce systems that are reliable, scalable, and built to convert.",
    image: "/assets/editorial-bw.jpg"
  },
  {
    number: "04",
    title: "Founder Operations",
    body: "We create systems that give founders visibility, control, and the freedom to focus on what matters.",
    image: "/assets/hero-overhead.jpg"
  }
];

export default function ServiceCards() {
  return (
    <div className="services-rows">
      {services.map((service) => (
        <motion.article
          key={service.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="service-row"
        >
          <p className="service-row-num">{service.number}</p>
          <h3 className="service-row-title"><ScrambleText text={service.title} speed={32} /></h3>
          <p className="service-row-body">{service.body}</p>
          <div className="service-row-thumb-wrap">
            <img src={service.image} alt={service.title} className="service-row-thumb" />
          </div>
        </motion.article>
      ))}
    </div>
  );
}
