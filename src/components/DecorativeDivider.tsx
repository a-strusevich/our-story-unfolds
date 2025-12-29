import { motion } from "framer-motion";
import HeartIcon from "./HeartIcon";

interface DecorativeDividerProps {
  showHeart?: boolean;
}

const DecorativeDivider = ({ showHeart = true }: DecorativeDividerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-center gap-4 py-8"
    >
      <div className="decorative-line" />
      {showHeart && <HeartIcon />}
      <div className="decorative-line" />
    </motion.div>
  );
};

export default DecorativeDivider;
