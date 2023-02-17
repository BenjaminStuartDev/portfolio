import { motion } from "framer-motion";

const defaultVariants = {
  animate: {
    x: [`100vw`, `-100vw`],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

Marquee.defaultProps = {
  marqueeVariants: defaultVariants,
};

export default function Marquee({ marqueeVariants, children }) {
  return (
    <section className="w-full bg-mine-shaft flex items-center justify-center">
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        {children}
      </motion.div>
    </section>
  );
}
