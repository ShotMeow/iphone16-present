import type { FC } from "react";

import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import TitaniumSection from "./TitaniumSection";
import ChipSection from "./ChipSection";

const Home: FC = () => {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <TitaniumSection />
      <ChipSection />
    </main>
  );
};

export default Home;
