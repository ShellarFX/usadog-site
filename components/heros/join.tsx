import Image from 'next/image';
import { Button } from '@nextui-org/button';

export const Join = () => {
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
            JOIN THE PACK TODAY!
          </div>

          <div className="text-foreground2 text-3xl">
            Don't miss your chance to be part of something truly special. Whether you're a
            crypto enthusiast, a dog lover, or just someone who believes in honoring our
            heroes, there's a place for you in the USADOG pack
          </div>

          <div className="flex w-full justify-center">
            <Button className="!w-64 !h-24 text-3xl rounded-3xl bg-[#3A57C9] hover:scale-110">JOIN US!</Button>
          </div>
        </div>
      </div>
  )
}