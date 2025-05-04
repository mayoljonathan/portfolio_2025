import { motion } from "framer-motion";

export const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-40 hover:opacity-100 transition-opacity duration-300"
    >
      <span className="text-xs uppercase tracking-widest">Scroll</span>
      <motion.div
        className="w-0.5 h-6 bg-foreground/80"
        animate={{
          scaleY: [1, 0.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};
