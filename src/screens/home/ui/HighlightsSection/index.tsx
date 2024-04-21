"use client";
import { FC, useState } from "react";

import Watch from "@/shared/ui/icons/Watch";
import Arrow from "@/shared/ui/icons/Arrow";

import HighlightSlider from "./HighlightSlider";

const HighlightsSection: FC = () => {
  const [videoState, setVideoState] = useState<"playing" | "paused" | "ended">(
    "playing",
  );

  return (
    <section className="overflow-x-hidden bg-zinc-900 py-20">
      <div className="container">
        <header className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-0">
          <h2 className="text-2xl font-semibold text-gray-400 lg:text-5xl">
            Get the highlights.
          </h2>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
            <button className="flex items-center gap-2 text-xl text-blue-500 hover:underline">
              Watch the film <Watch />
            </button>
            <button className="flex items-center gap-2 text-xl text-blue-500 hover:underline">
              Watch the event <Arrow />
            </button>
          </div>
        </header>
        <HighlightSlider
          videoState={videoState}
          setVideoState={setVideoState}
        />
      </div>
    </section>
  );
};

export default HighlightsSection;
