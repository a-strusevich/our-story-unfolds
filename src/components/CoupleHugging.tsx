import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CoupleHugging = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const manX = useTransform(scrollYProgress, [0, 0.5, 1], [-100, -30, 0]);
  const womanX = useTransform(scrollYProgress, [0, 0.5, 1], [100, 30, 0]);
  const heartsOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
  const heartsY = useTransform(scrollYProgress, [0.6, 1], [20, 0]);

  return (
    <div ref={ref} className="relative">
      {/* Floating hearts */}
      <motion.div
        style={{ opacity: heartsOpacity, y: heartsY }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-4"
      >
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="text-accent"
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path 
              fill="currentColor" 
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </motion.svg>
        ))}
      </motion.div>

      <div className="flex items-end justify-center">
        {/* Man */}
        <motion.div style={{ x: manX }} className="relative z-10">
          <svg width="140" height="220" viewBox="0 0 140 220">
            {/* Head */}
            <circle cx="70" cy="40" r="32" className="fill-primary" />
            {/* Hair */}
            <path 
              d="M42 35 Q70 5 98 35 Q98 22 70 15 Q42 22 42 35" 
              className="fill-foreground/80"
            />
            {/* Eyes - happy/closed */}
            <path d="M55 38 Q60 42 65 38" fill="none" stroke="hsl(var(--background))" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M75 38 Q80 42 85 38" fill="none" stroke="hsl(var(--background))" strokeWidth="2.5" strokeLinecap="round" />
            {/* Big smile */}
            <path 
              d="M55 52 Q70 65 85 52" 
              fill="none" 
              stroke="hsl(var(--background))" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            
            {/* Body */}
            <path 
              d="M45 75 Q70 68 95 75 L100 160 Q70 165 40 160 Z" 
              className="fill-foreground/80"
            />
            
            {/* Arm reaching to hug */}
            <motion.path 
              d="M95 90 Q130 110 120 150 Q115 170 100 175"
              fill="none" 
              stroke="hsl(var(--primary))" 
              strokeWidth="16" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            {/* Other arm */}
            <path 
              d="M45 90 Q20 120 30 150"
              fill="none" 
              stroke="hsl(var(--primary))" 
              strokeWidth="16" 
              strokeLinecap="round"
            />
            
            {/* Legs */}
            <rect x="50" y="155" width="18" height="60" rx="8" className="fill-foreground/60" />
            <rect x="72" y="155" width="18" height="60" rx="8" className="fill-foreground/60" />
          </svg>
        </motion.div>

        {/* Woman */}
        <motion.div style={{ x: womanX }} className="relative z-10 -ml-10">
          <svg width="140" height="220" viewBox="0 0 140 220">
            {/* Head */}
            <circle cx="70" cy="40" r="32" className="fill-accent" />
            {/* Hair */}
            <ellipse cx="70" cy="22" rx="35" ry="18" className="fill-foreground/70" />
            <ellipse cx="40" cy="55" rx="10" ry="30" className="fill-foreground/70" />
            <ellipse cx="100" cy="55" rx="10" ry="30" className="fill-foreground/70" />
            {/* Eyes - happy/closed */}
            <path d="M55 38 Q60 42 65 38" fill="none" stroke="hsl(var(--background))" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M75 38 Q80 42 85 38" fill="none" stroke="hsl(var(--background))" strokeWidth="2.5" strokeLinecap="round" />
            {/* Big smile */}
            <path 
              d="M55 52 Q70 65 85 52" 
              fill="none" 
              stroke="hsl(var(--background))" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            
            {/* Dress */}
            <path 
              d="M45 75 Q70 68 95 75 L105 180 Q70 185 35 180 Z" 
              className="fill-accent/80"
            />
            
            {/* Arm reaching to hug */}
            <motion.path 
              d="M45 90 Q10 110 20 150 Q25 170 40 175"
              fill="none" 
              stroke="hsl(var(--accent))" 
              strokeWidth="16" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            {/* Other arm */}
            <path 
              d="M95 90 Q120 120 110 150"
              fill="none" 
              stroke="hsl(var(--accent))" 
              strokeWidth="16" 
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default CoupleHugging;
