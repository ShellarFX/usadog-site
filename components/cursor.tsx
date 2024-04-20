import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import React from 'react';
// import { useMouse } from 'react-use';
import { useCursor } from '@/contexts/cursor-context';
import useMouse from '@react-hook/mouse-position';

interface CursorProps {
  layoutRef: React.RefObject<HTMLDivElement>;
}

export const Cursor = ({ layoutRef }: CursorProps) => {
  const { clientX: cursorXPosition, clientY: cursorYPosition } = useMouse(layoutRef);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const { cursorText, cursorVariant } = useCursor();

  const variants: Variants = {
    default: {
      opacity: !cursorXPosition && !cursorYPosition ? 0 : 1,
      height: 10,
      width: 10,
      fontSize: '16px',
      backgroundColor: '#1e91d6',
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    welcome: {
      opacity: 1,
      backgroundColor: '#FFBCBC',
      color: '#000',
      height: 64,
      width: 64,
      fontSize: '32px',
      cursor: "none"
    },
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const offsets: { [k: keyof typeof variants]: number } = {
    default: 0,
    welcome: 48,
  };

  React.useEffect(() => {
    cursorX.set((cursorXPosition || 0) - offsets[cursorVariant]);
    cursorY.set((cursorYPosition || 0) - offsets[cursorVariant]);
  }, [cursorX, cursorY, cursorXPosition, cursorYPosition, offsets, cursorVariant]);

  return (
      <motion.div
          variants={variants}
          className="fixed z-[100] flex flex-row items-center justify-center top-0 left-0 h-[10px] w-[10px] bg-[#1e91d6] rounded-full pointer-events-none"
          animate={cursorVariant}
          transition={springConfig}
          style={{
            // translateX: useTransform(cursorXSpring, value => value - offsets[cursorVariant]),
            // translateY: useTransform(cursorYSpring, value => value - offsets[cursorVariant]),
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
      >
        <span className="flex items-center justify-center mt-2 pointer-events-none">{cursorText}</span>
      </motion.div>
  );
};
