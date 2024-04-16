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

        <div className="flex flex-col w-full gap-6 max-w-7xl md:px-0 items-start px-6 z-10">
          <div className="flex flex-col md:flex-row z-10 md:gap-0 gap-12 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] h-full justify-between w-full">
            <div className="inline-flex flex-col justify-between">
              <RevealOnScroll>
                <RotatingDiv>
                  <div className="text-5xl md:text-7xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                    Tokenomics
                  </div>
                </RotatingDiv>
              </RevealOnScroll>

              <div className="flex gap-12 shrink-0">
                <div className="flex flex-col gap-2 items-end text-3xl md:text-5xl">
                  <div>LP</div>
                  <div>TAX</div>
                  <div>TICKER</div>
                </div>

                <div className="flex flex-col gap-2 text-3xl md:text-5xl">
                  <div>100% BURNT</div>
                  <div>0%</div>
                  <div>$USADOG</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex-shrink-0">
                <Image width={0}
                       height={0}
                       sizes="100vw"
                       src="/graph.png"
                       alt="graph"
                       className="w-[360px] md:w-[660px] h-auto" />
              </div>
            </div>
          </div>

          <div className="flex gap-0 md:gap-4 items-start md:items-center flex-col md:flex-row">
            <div className="text-5xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">TOKEN ADDRESS</div>
            <div className="text-sm md:text-4xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">GjNwKDdL4ED5JTrnXN9LZWPiKiXpQCPgvvppE6cJYJzP</div>
          </div>
        </div>
      </div>
  );
};