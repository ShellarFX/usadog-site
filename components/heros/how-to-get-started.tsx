'use client';

import Image from 'next/image';
import { WhyFrame } from '@/components/why-frame';
import { useEffect } from 'react';
import { RevealOnScroll } from '@/components/reveal-on-scroll';
import { RotatingDiv } from '@/components/rotating-div';

export const HowToGetStarted = () => {
  useEffect(() => {
    // @ts-ignore
    window.Jupiter.init({
      displayMode: 'integrated',
      integratedTargetId: 'integrated-terminal',
      endpoint: 'https://rpc.ankr.com/solana/c2d5202e0d067e133ae3917d10dd099240a6baa806a638dbf764c71188a0a2fb',
      strictTokenList: false,
      defaultExplorer: 'Solscan',
      formProps: {
        fixedOutputMint: true,
        initialInputMint: 'So11111111111111111111111111111111111111112',
        initialOutputMint: 'GjNwKDdL4ED5JTrnXN9LZWPiKiXpQCPgvvppE6cJYJzP',
      },
    });
  }, []);

  return (
      <div id="get-started" className="relative py-12 w-full items-center flex justify-center scroll-mt-12">
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
              <div className="text-7xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                How to get started?
              </div>
            </RotatingDiv>
          </RevealOnScroll>

          <div className="flex md:flex-row flex-col gap-8 md:gap-24 w-full z-10 justify-center items-center">
            <RevealOnScroll delay={0.1}>
              <div className="bg-zinc-800 px-2 pt-2.5 rounded-xl shrink-0 flex-grow-0">
                <div id="integrated-terminal" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="relative flex h-full">
                <Image width={0}
                       height={0}
                       sizes="100vw"
                       src="/frame90.png"
                       alt="welcome"
                       className="h-[240px] md:h-[460px] w-auto hidden md:block" />


                <div className="static md:absolute flex flex-col p-0 md:text-left text-center md:p-12 items-center justify-center h-full gap-2 text-3xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                  <div>
                    1. Buy USADOG: Purchase USADOG tokens
                    and become a proud member of our
                    community.
                  </div>
                  <div>
                    2. Spread the Word: Share the USADOG
                    mission with friends, family, and
                    fellow crypto enthusiasts.
                  </div>
                  <div>
                    3. Stay Connected: Follow us on social
                    media for the latest updates,
                    giveaways, and community events.
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
  );
};