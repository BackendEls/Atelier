"use client";

import { motion } from "framer-motion";

type ServiceSceneProps = {
  number: string;
  title: string;
  body: string;
};

export default function ServiceScene({ number, title, body }: ServiceSceneProps) {
  return (
    <motion.article
      initial={{ opacity: 0.92 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="service-scene"
    >
      <div className="service-scene-grid">
        <div>
          <p className="service-number">{number}</p>
          <h3 className="service-title">{title}</h3>
          <p className="service-body">{body}</p>
        </div>
        <div className="service-visual" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </motion.article>
  );
}
