import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingDivProps {
  children: ReactNode;
  delay?: number;
}

export const FloatingDiv = ({ children, delay = 0 }: FloatingDivProps) => {
  return (
      <motion.div
          animate={{ y: [-30, 0] }}
          transition={{
            delay: delay,
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2.5,
            ease: 'easeInOut',
          }}
      >
        {children}
      </motion.div>
  );
};