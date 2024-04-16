'use client';

import Image from 'next/image';
import { RevealOnScroll } from '@/components/reveal-on-scroll';
import { RotatingDiv } from '@/components/rotating-div';

export const Tokenomics = () => {
  return (
      <div id="tokenomics" className="relative py-12 w-full items-center flex justify-center scroll-mt-12">
        <Image
            sizes="100vw"
            fill
            objectFit="cover"
            src="/background2.png"
            quality={100}
            alt="background"
            className="pointer-events-none"
        />

        <div className="flex flex-col w-full gap-12 max-w-7xl md:px-0 items-start px-6 z-10">
          <RevealOnScroll>
            <RotatingDiv>
              <div className="text-5xl md:text-7xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                Tokenomics
              </div>
            </RotatingDiv>
          </RevealOnScroll>

          <div className="flex flex-col md:flex-row z-10 md:gap-0 gap-12 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] items-end justify-between w-full">
            <div className="flex gap-12 shrink-0">
              <RevealOnScroll>
                <div className="flex flex-col gap-2 items-end text-3xl md:text-5xl">
                  <div>LP</div>
                  <div>TAX</div>
                  <div>TICKER</div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <div className="flex flex-col gap-2 text-3xl md:text-5xl">
                  <div>100$ BURNT</div>
                  <div>0%</div>
                  <div>$USADOG</div>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay={0.2}>
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col text-3xl md:text-6xl">
                  <div>TOTAL SUPPLY</div>
                  <div>1.000.000.000</div>
                </div>

                <div className="shrink-0">
                  <Image width={0}
                         height={0}
                         sizes="100vw"
                         src="/graph.png"
                         alt="graph"
                         className="w-[360px] md:w-[660px] h-auto" />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div className="flex gap-0 md:gap-4 items-start md:items-center flex-col md:flex-row">
              <div className="text-5xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">TOKEN ADDRESS</div>
              <div className="text-sm md:text-3xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">GjNwKDdL4ED5JTrnXN9LZWPiKiXpQCPgvvppE6cJYJzP</div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
  );
};