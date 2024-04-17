import Image from 'next/image';

interface WhyFrameProps {
  image: string;
  title: string;
  description: string;
}

export const WhyFrame = ({ image, title, description }: WhyFrameProps) => {
  return (
      <div className="relative w-full flex h-full">
        <Image width={0}
               height={0}
               sizes="100vw"
               src="/frame.png"
               objectFit="cover"
               alt="welcome"
               className="w-[384px] h-auto" />

        <div className="absolute flex flex-col py-12 px-10 text-center items-center gap-8 w-full h-full text-foreground2 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
          <Image width={0}
                 height={0}
                 sizes="100vw"
                 src={`/${image}.png`}
                 alt="welcome"
                 className="w-[140px] md:w-[200px] h-auto" />

          <div className="flex flex-col gap-4">
            <div className="text-4xl">
              {title}
            </div>

            <div className="text-2xl">
              {description}
            </div>
          </div>
        </div>
      </div>
  );
};