import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedSceneProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedScene = ({ children, className = "" }: AnimatedSceneProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className={`min-h-screen flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedScene;
