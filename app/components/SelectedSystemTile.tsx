import { motion } from "framer-motion";

type SelectedSystemTileProps = {
  title: string;
  body: string;
};

export default function SelectedSystemTile({ title, body }: SelectedSystemTileProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="system-tile"
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </motion.article>
  );
}
