import { Welcome } from '@/components/heros/welcome';
import { WhyUsaDog } from '@/components/heros/whyusadog';
import { HowToGetStarted } from '@/components/heros/how-to-get-started';
import { Tokenomics } from '@/components/heros/tokenomics';
import { Roadmap } from '@/components/heros/roadmap';
import { Join } from '@/components/heros/join';

export default function Home() {
  return (
      <section className="flex flex-col items-center justify-center">
        <Welcome />
        <WhyUsaDog />
        <HowToGetStarted />
        <Tokenomics />
        <Roadmap />
        <Join />
      </section>
  );
}
