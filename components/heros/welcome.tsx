'use client';

import Image from 'next/image';
import { RevealOnScroll } from '@/components/reveal-on-scroll';
import { FloatingDiv } from '@/components/floating-div';
import background from '../../public/background.png';
import welcome from '../../public/welcome.png';
import dogs from '../../public/dogs.png';

export const Welcome = () => {
  return (
      <div id="home" className="relative py-12 w-full items-center flex justify-center scroll-mt-12">
        <Image
            fill
            src={background}
            alt="background"
            className="pointer-events-none object-cover"
        />

        <div className="flex md:flex-row flex-col w-full gap-12 md:gap-32 max-w-7xl md:px-0 items-center text-center px-6 z-10">
          <div className="flex flex-col items-center z-10 shrink-0">
            <RevealOnScroll>
              <FloatingDiv>
                <Image
                    src={welcome}
                    alt="welcome"
                    className="w-[360px] md:w-[460px] h-auto"
                />
              </FloatingDiv>
            </RevealOnScroll>

            <RevealOnScroll>
              <Image
                  src={dogs}
                  alt="dogs"
                  className="w-[360px] md:w-[460px] h-auto drop-shadow-md pl-14"
              />
            </RevealOnScroll>
          </div>


          <div className="flex flex-col gap-2 z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            <RevealOnScroll delay={0.2}>
              <div className="text-5xl md:whitespace-nowrap">
                Join the pack of Crypto Heroes!
              </div>

              <div className="text-3xl mt-6">
                What is $USADOG?
              </div>

              <div className="text-3xl">
                $USADOG is the ultimate tribute to America's
                unsung heroes: military working dogs.
                With our token, we celebrate the bravery,
                loyalty, and sacrifice of these four-legged
                warriors who serve alongside our troops.
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
  );
};