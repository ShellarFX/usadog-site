import Image from 'next/image';
import frame from '../public/frame2.png';

interface RoadmapFrameProps {
  title: string;
  items: {
    title: string,
    description: string
  }[];
}

export const RoadmapFrame = ({ title, items }: RoadmapFrameProps) => {
  return (
      <div className="relative w-full flex h-full">
        <Image
            src={frame}
            alt="welcome"
        />

        <div className="absolute flex flex-col py-12 px-10 text-center items-center gap-8 w-full h-full text-foreground2 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4">
            <div className="text-xl md:text-3xl text-foreground">
              {title}
            </div>

            {!!items && <ul className="list-disc pl-2 md:text-lg text-left text-foreground">
              {items.map((item, index) => (
                  <li key={index} className="drop-shadow-md">
                    <span className="text-md md:text-xl">
                    {item.title}:
                    </span>
                    {' '}
                    <span className="text-foreground2">
                      {item.description}
                    </span>
                  </li>
              ))}
            </ul>}
          </div>
        </div>
      </div>
  );
};