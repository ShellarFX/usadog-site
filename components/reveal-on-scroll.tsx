import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode,
  duration?: number
  delay?: number
}

export const RevealOnScroll = ({ children, duration, delay }: RevealOnScrollProps) => {
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: -100,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        type: 'spring',
        bounce: 0.6,
        duration: duration || 1.5,
      },
    },
  };

  return (
      <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
      >
        {children}
      </motion.div>
  );
};