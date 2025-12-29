import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PersonAtDeskProps {
  isMan?: boolean;
  flip?: boolean;
}

const PersonAtDesk = ({ isMan = true, flip = false }: PersonAtDeskProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const headBob = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, -5, 0]);
  const armMove = useTransform(scrollYProgress, [0.3, 0.6], [0, -10]);

  return (
    <div ref={ref} className={`relative ${flip ? "scale-x-[-1]" : ""}`}>
      {/* Desk */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      >
        <svg width="200" height="80" viewBox="0 0 200 80">
          {/* Desk surface */}
          <rect x="10" y="10" width="180" height="12" rx="2" className="fill-primary/80" />
          {/* Desk legs */}
          <rect x="20" y="22" width="8" height="55" className="fill-primary/60" />
          <rect x="172" y="22" width="8" height="55" className="fill-primary/60" />
          {/* Computer monitor */}
          <rect x="70" y="-30" width="60" height="40" rx="3" className="fill-foreground/20" />
          <rect x="75" y="-25" width="50" height="30" rx="1" className="fill-accent/30" />
          <rect x="95" y="10" width="10" height="5" className="fill-foreground/20" />
        </svg>
      </motion.div>

      {/* Person */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10"
      >
        <svg width="120" height="180" viewBox="0 0 120 180">
          {/* Body */}
          <motion.g style={{ y: headBob }}>
            {/* Head */}
            <circle 
              cx="60" 
              cy="35" 
              r="28" 
              className={isMan ? "fill-primary" : "fill-accent"}
            />
            {/* Hair */}
            {isMan ? (
              <path 
                d="M35 30 Q60 5 85 30 Q85 20 60 15 Q35 20 35 30" 
                className="fill-foreground/80"
              />
            ) : (
              <>
                <ellipse cx="60" cy="20" rx="30" ry="15" className="fill-foreground/70" />
                <ellipse cx="35" cy="45" rx="8" ry="25" className="fill-foreground/70" />
                <ellipse cx="85" cy="45" rx="8" ry="25" className="fill-foreground/70" />
              </>
            )}
            {/* Eyes */}
            <circle cx="50" cy="35" r="3" className="fill-background" />
            <circle cx="70" cy="35" r="3" className="fill-background" />
            <circle cx="51" cy="36" r="1.5" className="fill-foreground" />
            <circle cx="71" cy="36" r="1.5" className="fill-foreground" />
            {/* Smile */}
            <path 
              d="M50 48 Q60 55 70 48" 
              fill="none" 
              stroke="hsl(var(--background))" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </motion.g>

          {/* Torso */}
          <path 
            d="M40 65 Q60 60 80 65 L85 120 Q60 125 35 120 Z" 
            className={isMan ? "fill-foreground/80" : "fill-accent/80"}
          />

          {/* Arms */}
          <motion.g style={{ rotate: armMove }}>
            <path 
              d="M40 75 Q20 90 25 110" 
              fill="none" 
              stroke={isMan ? "hsl(var(--primary))" : "hsl(var(--accent))"} 
              strokeWidth="12" 
              strokeLinecap="round"
            />
          </motion.g>
          <path 
            d="M80 75 Q100 90 95 110" 
            fill="none" 
            stroke={isMan ? "hsl(var(--primary))" : "hsl(var(--accent))"} 
            strokeWidth="12" 
            strokeLinecap="round"
          />

          {/* Hands on keyboard */}
          <circle cx="30" cy="115" r="8" className={isMan ? "fill-primary" : "fill-accent"} />
          <circle cx="90" cy="115" r="8" className={isMan ? "fill-primary" : "fill-accent"} />
        </svg>
      </motion.div>
    </div>
  );
};

export default PersonAtDesk;
