import { motion } from "framer-motion";

interface QuoteBlockProps {
  quote: string;
  showQuotes?: boolean;
}

const QuoteBlock = ({ quote, showQuotes = true }: QuoteBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative px-4 md:px-8"
    >
      {showQuotes && (
        <span className="absolute -top-4 md:-top-8 left-1/2 -translate-x-1/2 text-6xl md:text-8xl text-accent/30 font-serif">
          "
        </span>
      )}
      <p className="quote-text text-foreground">
        {quote}
      </p>
      {showQuotes && (
        <span className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 text-6xl md:text-8xl text-accent/30 font-serif rotate-180">
          "
        </span>
      )}
    </motion.div>
  );
};

export default QuoteBlock;
