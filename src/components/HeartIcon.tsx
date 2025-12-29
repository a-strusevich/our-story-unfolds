import { motion } from "framer-motion";

interface HeartIconProps {
  className?: string;
  animate?: boolean;
}

const HeartIcon = ({ className = "", animate = true }: HeartIconProps) => {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 text-accent ${animate ? "animate-heart-beat" : ""} ${className}`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </motion.svg>
  );
};

export default HeartIcon;
