import type { FC } from "react";

import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import TitaniumSection from "./TitaniumSection";

const Home: FC = () => {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <TitaniumSection />
    </main>
  );
};

export default Home;
