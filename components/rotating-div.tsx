import { motion } from "framer-motion";
import { ReactNode } from 'react';

interface RotatingDivProps {
  children: ReactNode
  delay?: number
  rotation?: number
  duration?: number
}


export const RotatingDiv = ({ children, delay = 0, rotation, duration }: RotatingDivProps) => {
  return (
      <motion.div
          animate={{ rotateZ: rotation || [-3, 3] }}
          transition={{
            delay: delay,
            repeat: Infinity,
            repeatType: "reverse",
            duration: duration || 2.5,
            ease: "easeInOut"
          }}
      >
        {children}
      </motion.div>
  );
}