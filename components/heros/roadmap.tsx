'use client';

import Image from 'next/image';
import { RoadmapFrame } from '@/components/roadmap-frame';
import { RevealOnScroll } from '@/components/reveal-on-scroll';
import { RotatingDiv } from '@/components/rotating-div';

export const Roadmap = () => {
  return (
      <div id="roadmap" className="relative py-12 w-full items-center flex justify-center scroll-mt-12">
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
              Roadmap
            </div>
            </RotatingDiv>
          </RevealOnScroll>

          <div className="flex md:flex-row flex-col gap-16 w-full justify-center">
            <RevealOnScroll>
              <RoadmapFrame title="Phase 1" items={[
                'Idea creation.',
                'Community building.',
                'Launching social media.',
                'Launching $USADOG website.',
                'Pre-launch partnerships launch on raydium.',
                'Launch marketing.',
              ]} />
            </RevealOnScroll>

            <RevealOnScroll delay={0.25}>
              <RoadmapFrame title="Phase 2" items={[
                'Idea creation.',
                'more partnerships with strategic influencers.',
                'Creation of content for social media.',
                '$usadog trending.',
                'update social media on dexscreener and dexstool.',
                'listing on cmc & cg.',
                'listing on cexS.',
              ]} />
            </RevealOnScroll>

            <RevealOnScroll delay={0.5}>
              <RoadmapFrame title="Phase 2" items={[
                'Transition into the next phase of marketing.',
                'launch nft.',
                'donation campaing.',
                'more partnerships with influencers.',
                'more cexs listing.',
                'partnerships with other projects.',
                'tier 1 cex listings.',
              ]} />
            </RevealOnScroll>
          </div>
        </div>
      </div>
  );
};