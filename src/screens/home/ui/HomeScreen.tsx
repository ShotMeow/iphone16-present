import type { FC } from "react";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";

const Home: FC = () => {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
    </main>
  );
};

export default Home;
