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
            src="/background2.png"
            quality={100}
            alt="background"
            className="pointer-events-none object-cover"
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
              <RoadmapFrame title="Phase 1: Setting the Bark in Motion!" items={[
                {
                  title: "Idea Woofin'",
                  description: "Unleash our creative pack to brainstorm and fetch the most innovative ideas."
                },
                {
                  title: "Pawsitive Vibes",
                  description: "Start building our community from the ground up, wagging tails and making fur-riends along the way."
                },
                {
                  title: "Social Paw-ty",
                  description: "Launch USADOG's social media presence, barking loud and proud across all platforms."
                },
                {
                  title: "Website Tail-Wagging",
                  description: "Roll out the red carpet for $USADOG with a pawsitively fetching website."
                },
                {
                  title: "Paw-tnering Up",
                  description: "Forming paw-some partnerships even before the big launch to make sure we hit the ground running."
                },
                {
                  title: "Launching on Raydium",
                  description: "Ready, set, launch on Raydium! Let's get those rocket boosters fired up."
                },
                {
                  title: "Launch Marketing Blitz",
                  description: "Unleash a tsunami of marketing strategies to make sure everyone knows about USADOG's big debut."
                },
              ]} />
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <RoadmapFrame title="Phase 2: Riding the Tailwind!" items={[
                {
                  title: "Influential Paw-tnerhips",
                  description: "Fetching even more partnerships with strategic influencers who bark the loudest."
                },
                {
                  title: "Content Creation Howl",
                  description: "Crafting engaging and tail-wagging content for our social media platforms, making sure we're trending everywhere."
                },
                {
                  title: "$USADOG on Fire",
                  description: "Igniting a wildfire of interest as $USADOG trends across the crypto-sphere."
                },
                {
                  title: "Keeping Dexes in Check",
                  description: "Keeping our social media pack updated on Dexscreener and Dexstool for maximum visibility."
                },
                {
                  title: "Listing on CMC & CG",
                  description: "Making our mark on the big leagues by getting listed on CoinMarketCap and CoinGecko."
                },
                {
                  title: "Wagging Our Way to CEXs",
                  description: "Making our presence known on centralized exchanges to expand our reach."
                },
              ]} />
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <RoadmapFrame title="Phase 3: Unleashing the Howl of Success!" items={[
                {
                  title: "Marketing Frenzy Continues",
                  description: "Transitioning into the next phase of marketing with a bark louder than ever before."
                },
                {
                  title: "NFT Fetch Quest",
                  description: "Launching our NFT collection to give our community something to howl about."
                },
                {
                  title: "Generosity Unleashed",
                  description: "Kicking off a donation campaign to give back to the real heroes—our furry friends."
                },
                {
                  title: "Paw-some Influencer Collabs",
                  description: "Forging even more partnerships with influencers to amplify our message."
                },
                {
                  title: "CEX Expansion",
                  description: "Getting listed on more centralized exchanges to make sure everyone has access to $USADOG."
                },
                {
                  title: "Joining Paws with Other Projects",
                  description: "Partnering up with other projects to create a synergy of success."
                },
                {
                  title: "Tier 1 CEX Listings",
                  description: "Making it to the big leagues with listings on tier 1 centralized exchanges."
                },
              ]} />
            </RevealOnScroll>
          </div>
        </div>
      </div>
  );
};