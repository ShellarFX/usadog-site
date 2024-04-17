import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScalingDivProps {
  children: ReactNode;
  delay?: number;
  scales?: number;
  duration?: number;
}

export const ScalingDiv = ({ children, delay = 0, scales, duration }: ScalingDivProps) => {
  return (
      <motion.div
          animate={{ scale: scales || [1, 1.1] }}
          transition={{
            delay: delay,
            repeat: Infinity,
            repeatType: 'reverse',
            duration: duration || 0.5,
            ease: 'easeInOut',
          }}
      >
        {children}
      </motion.div>
  );
};