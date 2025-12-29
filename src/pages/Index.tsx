import { motion } from "framer-motion";
import StorySection from "@/components/StorySection";
import QuoteBlock from "@/components/QuoteBlock";
import HeartIcon from "@/components/HeartIcon";
import ScrollIndicator from "@/components/ScrollIndicator";
import DecorativeDivider from "@/components/DecorativeDivider";
import couplePhoto from "@/assets/couple-photo.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <HeartIcon className="w-10 h-10 md:w-14 md:h-14 mx-auto" />
          </motion.div>
          
          <h1 className="story-title text-foreground mb-6 md:mb-8">
            Наша история
          </h1>
          
          <p className="story-paragraph mx-auto text-center">
            История о том, как два человека нашли друг друга там, 
            где меньше всего ожидали...
          </p>
        </motion.div>
        
        <ScrollIndicator />
        
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-32 right-10 w-40 h-40 md:w-64 md:h-64 bg-accent/10 rounded-full blur-3xl"
        />
      </section>

      {/* Photo Section */}
      <StorySection className="bg-secondary/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="photo-frame max-w-md md:max-w-lg lg:max-w-xl mx-auto"
        >
          <img 
            src={couplePhoto} 
            alt="Мы вместе" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </StorySection>

      {/* Story Part 1 - Meeting */}
      <StorySection>
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-4 block"
          >
            Глава первая
          </motion.span>
          <h2 className="story-title text-foreground mb-8">
            Там, где всё началось
          </h2>
          <p className="story-paragraph mx-auto text-center mb-6">
            Мы встретились на работе. Обычный день, обычные дела. 
            Никто из нас тогда не думал, что эта встреча изменит всё.
          </p>
          <p className="story-paragraph mx-auto text-center">
            Мы даже представить не могли, что будем вместе. 
            Жизнь приготовила для нас неожиданный поворот...
          </p>
        </div>
      </StorySection>

      {/* Quote 1 */}
      <StorySection className="bg-card">
        <div className="max-w-4xl mx-auto py-8 md:py-16">
          <QuoteBlock quote="Расстояния разделяют только тела. Душа всегда рядом." />
        </div>
      </StorySection>

      {/* Story Part 2 - Falling in Love */}
      <StorySection>
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-4 block"
          >
            Глава вторая
          </motion.span>
          <h2 className="story-title text-foreground mb-8">
            Влюбились до беспамятства
          </h2>
          <p className="story-paragraph mx-auto text-center mb-6">
            А потом случилось то, чего никто не ожидал. 
            Чувства накрыли с головой, и мир перевернулся.
          </p>
          <p className="story-paragraph mx-auto text-center">
            Каждый день стал особенным. Каждая встреча — праздником. 
            Мы поняли, что нашли своё счастье.
          </p>
          <DecorativeDivider />
        </div>
      </StorySection>

      {/* Quote 2 */}
      <StorySection className="bg-secondary/30">
        <div className="max-w-4xl mx-auto py-8 md:py-16">
          <QuoteBlock quote="Наносим добро и причиняем счастье" />
        </div>
      </StorySection>

      {/* Story Part 3 - Happiness */}
      <StorySection>
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-4 block"
          >
            Глава третья
          </motion.span>
          <h2 className="story-title text-foreground mb-8">
            Очень счастливы
          </h2>
          <p className="story-paragraph mx-auto text-center mb-6">
            Теперь мы вместе. И это — лучшее, что могло с нами случиться.
          </p>
          <p className="story-paragraph mx-auto text-center">
            Каждый день мы пишем новую страницу нашей истории. 
            И эта история будет длиться вечно.
          </p>
        </div>
      </StorySection>

      {/* Final Quote */}
      <StorySection className="bg-card">
        <div className="max-w-4xl mx-auto py-8 md:py-16">
          <QuoteBlock quote="Мы были вместе — я забыл весь мир..." />
        </div>
      </StorySection>

      {/* Footer */}
      <section className="py-20 md:py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center gap-3 mb-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, type: "spring" }}
              >
                <HeartIcon className="w-4 h-4 md:w-5 md:h-5" animate={false} />
              </motion.div>
            ))}
          </div>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground italic">
            С любовью, навсегда
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
