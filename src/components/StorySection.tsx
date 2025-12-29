import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StorySectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const StorySection = ({ children, className = "", delay = 0 }: StorySectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.9, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={`story-section ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default StorySection;
