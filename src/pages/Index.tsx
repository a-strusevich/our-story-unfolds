import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PersonAtDesk from "@/components/PersonAtDesk";
import WalkingPerson from "@/components/WalkingPerson";
import CoupleHugging from "@/components/CoupleHugging";
import QuoteBlock from "@/components/QuoteBlock";
import couplePhoto from "@/assets/couple-photo.jpeg";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Scene 1: Title */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-20 left-10 w-40 h-40 md:w-64 md:h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 md:w-80 md:h-80 bg-primary/10 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center relative z-10"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl md:text-7xl mb-6"
          >
            💕
          </motion.div>
          <h1 className="story-title text-foreground mb-4">Наша история</h1>
          <p className="text-muted-foreground text-lg md:text-xl">Листай вниз</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-8 text-3xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Scene 2: He works at his desk */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-secondary/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase">Глава 1</span>
          <h2 className="story-title text-foreground mt-2">Он работал...</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <PersonAtDesk isMan={true} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="story-paragraph text-center mt-8 max-w-md"
        >
          Обычный день в офисе. Ничего особенного...
        </motion.p>
      </section>

      {/* Scene 3: She works at her desk */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase">Глава 2</span>
          <h2 className="story-title text-foreground mt-2">Она тоже работала...</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <PersonAtDesk isMan={false} flip={true} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="story-paragraph text-center mt-8 max-w-md"
        >
          Никто из них не думал, что жизнь вот-вот изменится...
        </motion.p>
      </section>

      {/* Scene 4: Quote */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 bg-card">
        <QuoteBlock quote="Расстояния разделяют только тела. Душа всегда рядом." />
      </section>

      {/* Scene 5: They start walking towards each other */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-secondary/20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase">Глава 3</span>
          <h2 className="story-title text-foreground mt-2">И вдруг...</h2>
        </motion.div>

        <div className="flex items-end justify-center gap-8 md:gap-20 w-full max-w-4xl">
          <WalkingPerson isMan={true} direction="right" />
          <WalkingPerson isMan={false} direction="left" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="story-paragraph text-center mt-12 max-w-md"
        >
          Что-то начало меняться. Они шли навстречу друг другу...
        </motion.p>
      </section>

      {/* Scene 6: Quote */}
      <section className="min-h-[70vh] flex items-center justify-center px-4">
        <QuoteBlock quote="Наносим добро и причиняем счастье" />
      </section>

      {/* Scene 7: They meet and hug */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-secondary/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase">Глава 4</span>
          <h2 className="story-title text-foreground mt-2">Влюбились до беспамятства</h2>
        </motion.div>

        <CoupleHugging />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="story-paragraph text-center mt-12 max-w-md"
        >
          И стали очень счастливы ❤️
        </motion.p>
      </section>

      {/* Scene 8: Final Quote */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 bg-card">
        <QuoteBlock quote="Мы были вместе — я забыл весь мир..." />
      </section>

      {/* Scene 9: Real Photo */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase">И это мы</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="photo-frame max-w-sm md:max-w-md lg:max-w-lg shadow-2xl"
        >
          <img 
            src={couplePhoto} 
            alt="Мы вместе" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(7)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                className="text-2xl"
              >
                ❤️
              </motion.span>
            ))}
          </div>
          <p className="font-serif text-2xl md:text-3xl text-muted-foreground italic">
            С любовью, навсегда
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
