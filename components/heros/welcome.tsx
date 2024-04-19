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
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
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