import Image from 'next/image';
import { WhyFrame } from '@/components/why-frame';

export const WhyUsaDog = () => {
  return (
      <div className="relative py-12 w-full items-center flex justify-center">
        <Image
            sizes="100vw"
            fill
            objectFit="cover"
            src="/background2.png"
            quality={100}
            alt="background"
        />

        <div className="flex flex-col w-full gap-12 max-w-7xl md:px-0 items-start px-6">
          <div className="text-7xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            Why $USADOG?
          </div>

          <div className="flex md:flex-row flex-col gap-16 w-full justify-center">
            <WhyFrame image="rocket"
                      title="Fun"
                      description="Join our vibrant community and experience the thrill of crypto like never before" />
            <WhyFrame image="loyalty" title="Loyalty" description="Stand with us in honoring those who give their all for our freedom and security." />
            <WhyFrame image="potential" title="Potential" description="Get in early and be part of a token with a purpose, driven by passion and commitment." />
          </div>
        </div>
      </div>
  );
};