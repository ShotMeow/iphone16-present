import type { FC } from "react";
import Watch from "@/shared/ui/icons/Watch";
import Arrow from "@/shared/ui/icons/Arrow";

const HighlightsSection: FC = () => {
  return (
    <section className="bg-zinc-900 py-20">
      <div className="container">
        <header className="flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-4">
          <h2 className="text-2xl lg:text-5xl text-gray-400 font-semibold">
            Get the highlights.
          </h2>
          <div className="flex lg:flex-row flex-col lg:items-center gap-2 lg:gap-6">
            <button className="flex items-center gap-2 text-blue-500 text-xl hover:underline">
              Watch the film <Watch />
            </button>
            <button className="flex items-center gap-2 text-blue-500 text-xl hover:underline">
              Watch the event <Arrow />
            </button>
          </div>
        </header>
      </div>
    </section>
  );
};

export default HighlightsSection;
