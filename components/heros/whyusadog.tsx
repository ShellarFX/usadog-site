'use client';

import Image from 'next/image';
import { WhyFrame } from '@/components/why-frame';
import { RevealOnScroll } from '@/components/reveal-on-scroll';
import { RotatingDiv } from '@/components/rotating-div';
import background from '../../public/background2.png';
import { useCursor } from '@/contexts/cursor-context';

export const WhyUsaDog = () => {
  const { setCursorText, setCursorVariant } = useCursor();

  return (
      <div id="why" className="relative py-12 w-full items-center flex justify-center scroll-mt-12">
        <Image
            fill
            src={background}
            alt="background"
            className="pointer-events-none object-cover"
        />

        <div className="flex flex-col w-full gap-12 max-w-7xl md:px-0 items-start px-6 z-10">
          <RevealOnScroll>
            <RotatingDiv>
              <div
                  className="text-7xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]"
                  onMouseEnter={() => {
                    setCursorVariant('welcome');
                    setCursorText('🐕');
                  }}
                  onMouseLeave={() => {
                    setCursorVariant('default');
                    setCursorText('');
                  }}
              >
                Why $USADOG?
              </div>
            </RotatingDiv>
          </RevealOnScroll>

          <div className="flex md:flex-row flex-col gap-16 w-full justify-center">
            <RevealOnScroll>
              <WhyFrame
                  image="fun"
                  title="Fun"
                  description="Join our vibrant community and experience the thrill of crypto like never before"
                  cursorText="😂"
              />
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <WhyFrame
                  image="loyalty"
                  title="Loyalty"
                  description="Stand with us in honoring those who give their all for our freedom and security."
                  cursorText="🫡"
              />
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <WhyFrame
                  image="potential"
                  title="Potential"
                  description="Get in early and be part of a token with a purpose, driven by passion and commitment."
                  cursorText="💪"
              />
            </RevealOnScroll>
          </div>
        </div>
      </div>
  );
};