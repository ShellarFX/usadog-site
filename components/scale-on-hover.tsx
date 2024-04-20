import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleOnHoverProps {
  children: ReactNode;
  scale?: number;
  duration?: number;
}

export const ScaleOnHover = ({ children, scale, duration }: ScaleOnHoverProps) => {
  return (
      <motion.div
          whileHover={{
            scale: scale || 1.25,
          }}
          transition={{
            duration: duration || 0.2,
            ease: 'easeInOut',
            type: 'spring',
          }}
      >
        {children}
      </motion.div>
  );
};