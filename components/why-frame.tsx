import Image from 'next/image';
import frame from '../public/frame.png';
import fun from '../public/fun.png';
import loyalty from '../public/loyalty.png';
import potential from '../public/potential.png';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface WhyFrameProps {
  image: string;
  title: string;
  description: string;
}

const Images: { [k: string]: StaticImport } = {
  fun: fun,
  potential: potential,
  loyalty: loyalty,
};

export const WhyFrame = ({ image, title, description }: WhyFrameProps) => {

  return (
      <div className="relative w-full flex h-full">
        <Image
            src={frame}
            alt="frame"
        />

        <div className="absolute flex flex-col py-12 px-10 text-center items-center gap-8 w-full h-full text-foreground2 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
          <Image
              src={Images[image]}
              alt={image}
              className="w-[140px] md:w-[200px] h-auto"
          />

          <div className="flex flex-col gap-4">
            <div className="text-4xl text-foreground">
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