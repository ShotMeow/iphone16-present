import type { FC } from "react";

import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import OverviewSection from "./OverviewSection";
import TitaniumSection from "./TitaniumSection";
import ChipSection from "./ChipSection";

const Home: FC = () => {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <OverviewSection />
      <TitaniumSection />
      <ChipSection />
    </main>
  );
};

export default Home;
