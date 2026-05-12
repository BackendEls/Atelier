import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  label?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, label, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`section-shell section-space ${className ?? ""}`}>
      {(label || title) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {label ? <p className="section-label">{label}</p> : null}
          {title ? <h2 className="section-title">{title}</h2> : null}
        </motion.div>
      )}
      {children}
    </section>
  );
}
