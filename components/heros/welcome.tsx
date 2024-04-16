'use client';

import Image from 'next/image';
import { RevealOnScroll } from '@/components/reveal-on-scroll';
import { FloatingDiv } from '@/components/floating-div';
import { RotatingDiv } from '@/components/rotating-div';

export const Welcome = () => {
  return (
      <div id="home" className="relative py-12 w-full items-center flex justify-center scroll-mt-12">
        <Image
            sizes="100vw"
            fill
            objectFit="cover"
            src="/background.png"
            quality={100}
            alt="background"
            className="pointer-events-none"
        />

        <div className="flex md:flex-row flex-col w-full gap-12 md:gap-32 max-w-7xl md:px-0 items-center text-center px-6 z-10">
          <div className="flex flex-col items-center z-10 shrink-0">
            <RevealOnScroll delay={0.1}>
              <FloatingDiv>
                <Image width={0}
                       height={0}
                       sizes="100vw"
                       src="/welcome.png"
                       alt="welcome"
                       className="w-[360px] md:w-[460px] h-auto" />
              </FloatingDiv>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <RotatingDiv>
              <Image width={0}
                     height={0}
                     sizes="100vw"
                     src="/dogs.png"
                     alt="welcome"
                     className="w-[360px] md:w-[460px] h-auto drop-shadow-md pl-14" />
              </RotatingDiv>
            </RevealOnScroll>
          </div>


          <div className="flex flex-col gap-2 z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            <RevealOnScroll delay={0.3}>
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