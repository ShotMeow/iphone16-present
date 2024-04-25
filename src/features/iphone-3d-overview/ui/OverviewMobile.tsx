import { type FC, useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import { iphoneColors } from "../constants/params";
import { IphoneColorType } from "../types/params.types";

const OverviewMobile: FC = () => {
  const [currentColor, setCurrentColor] = useState<IphoneColorType>(
    iphoneColors[0],
  );

  return (
    <div className="my-10 flex flex-col items-center">
      <Image
        src={currentColor.imageSrc}
        alt="iPhone All Colors Picture"
        width={1094}
        height={936}
        className="h-64 w-full object-contain"
      />
      <h4 className="mt-4 h-12 text-center font-semibold text-zinc-400">
        {currentColor.title}
      </h4>
      <ul className="mt-4 flex items-center gap-4 rounded-full bg-zinc-900 p-4">
        {iphoneColors.map((item) => (
          <li className="flex size-6 items-center justify-center" key={item.id}>
            <button
              className={classNames(
                {
                  "border-blue-600 border-4":
                    item.imageSrc === currentColor.imageSrc,
                },
                "w-full h-full flex-shrink-0 cursor-pointer rounded-full transition-all",
              )}
              style={{
                background: Array.isArray(item.color)
                  ? `linear-gradient(90deg, ${item.color[0]} 0%, ${item.color[1]} 30%, ${item.color[2]} 65%, ${item.color[3]} 100%)`
                  : item.color,
              }}
              onClick={() => setCurrentColor(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverviewMobile;
