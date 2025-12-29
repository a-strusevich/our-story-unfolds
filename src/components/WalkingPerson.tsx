import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface WalkingPersonProps {
  isMan?: boolean;
  direction?: "left" | "right";
}

const WalkingPerson = ({ isMan = true, direction = "right" }: WalkingPersonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const walkX = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === "right" ? [-150, 150] : [150, -150]
  );

  return (
    <motion.div 
      ref={ref}
      style={{ x: walkX }}
      className={direction === "left" ? "scale-x-[-1]" : ""}
    >
      <motion.svg 
        width="100" 
        height="180" 
        viewBox="0 0 100 180"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        {/* Head */}
        <circle cx="50" cy="30" r="25" className={isMan ? "fill-primary" : "fill-accent"} />
        
        {/* Hair */}
        {isMan ? (
          <path 
            d="M28 26 Q50 5 72 26 Q72 18 50 12 Q28 18 28 26" 
            className="fill-foreground/80"
          />
        ) : (
          <>
            <ellipse cx="50" cy="15" rx="27" ry="14" className="fill-foreground/70" />
            <ellipse cx="28" cy="40" rx="7" ry="22" className="fill-foreground/70" />
            <ellipse cx="72" cy="40" rx="7" ry="22" className="fill-foreground/70" />
          </>
        )}
        
        {/* Eyes */}
        <circle cx="42" cy="28" r="2.5" className="fill-background" />
        <circle cx="58" cy="28" r="2.5" className="fill-background" />
        
        {/* Smile */}
        <path 
          d="M42 40 Q50 46 58 40" 
          fill="none" 
          stroke="hsl(var(--background))" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* Body */}
        <path 
          d="M35 58 Q50 52 65 58 L70 110 Q50 115 30 110 Z" 
          className={isMan ? "fill-foreground/80" : "fill-accent/80"}
        />
        
        {/* Walking arms */}
        <motion.path 
          d="M35 65 Q15 85 20 100"
          fill="none" 
          stroke={isMan ? "hsl(var(--primary))" : "hsl(var(--accent))"} 
          strokeWidth="10" 
          strokeLinecap="round"
          animate={{ rotate: [-20, 20, -20] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ originX: "35px", originY: "65px" }}
        />
        <motion.path 
          d="M65 65 Q85 85 80 100"
          fill="none" 
          stroke={isMan ? "hsl(var(--primary))" : "hsl(var(--accent))"} 
          strokeWidth="10" 
          strokeLinecap="round"
          animate={{ rotate: [20, -20, 20] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ originX: "65px", originY: "65px" }}
        />
        
        {/* Walking legs */}
        <motion.rect 
          x="38" y="105" width="12" height="50" rx="5" 
          className="fill-foreground/60"
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ originX: "44px", originY: "105px" }}
        />
        <motion.rect 
          x="52" y="105" width="12" height="50" rx="5" 
          className="fill-foreground/60"
          animate={{ rotate: [15, -15, 15] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ originX: "58px", originY: "105px" }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default WalkingPerson;
