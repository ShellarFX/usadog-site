import Image from 'next/image';

interface RoadmapFrameProps {
  title: string;
  items: string[];
}

export const RoadmapFrame = ({ title, items }: RoadmapFrameProps) => {
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
          <div className="flex flex-col gap-4">
            <div className="text-4xl">
              {title}
            </div>

            {!!items && <ul className="list-disc pl-8 text-xl md:text-2xl text-left">
              {items.map((item, index) => (
                  <li key={index} className="drop-shadow-md">{item}</li>
              ))}
            </ul>}
          </div>
        </div>
      </div>
  );
};