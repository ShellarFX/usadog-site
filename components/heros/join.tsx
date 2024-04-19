'use client';

import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { RevealOnScroll } from '@/components/reveal-on-scroll';
import { ScalingDiv } from '@/components/scaling-div';
import { RotatingDiv } from '@/components/rotating-div';
import { Link } from '@nextui-org/link';
import background from '../../public/background2.png'

export const Join = () => {
  return (
      <div id="join" className="relative py-12 w-full items-center flex justify-center scroll-mt-12">
        <Image
            fill
            src={background}
            alt="background"
            className="pointer-events-none object-cover"
        />

        <div className="flex flex-col w-full gap-12 max-w-7xl md:px-0 items-start px-6 z-10">
          <RevealOnScroll>
            <RotatingDiv>
              <div className="text-7xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                JOIN THE PACK TODAY!
              </div>
            </RotatingDiv>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="text-foreground2 text-3xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              Don't miss your chance to be part of something truly special. Whether you're a
              crypto enthusiast, a dog lover, or just someone who believes in honoring our
              heroes, there's a place for you in the USADOG pack
            </div>
          </RevealOnScroll>

          <div className="flex w-full justify-center">
            <RevealOnScroll delay={0.2}>
              <ScalingDiv>
                <Button as={Link}
                        isExternal
                        href="https://t.me/usadogofficial"
                        className="!w-64 !h-24 text-3xl rounded-3xl bg-[#3A57C9] hover:scale-110">JOIN US!</Button>
              </ScalingDiv>
            </RevealOnScroll>
          </div>
        </div>
      </div>
  );
};