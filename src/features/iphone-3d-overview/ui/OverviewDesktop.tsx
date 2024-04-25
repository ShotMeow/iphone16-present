import { type FC, type RefObject, Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { Canvas } from "@react-three/fiber";

import ModelView from "./ModelView";
import Fallback from "./Fallback";
import { iphoneModels, iphoneSizes } from "../constants/params";

const OverviewDesktop: FC = () => {
  const [size, setSize] = useState<"small" | "large">("small");
  const [model, setModel] = useState(iphoneModels[0]);

  const cameraControlSmall = useRef<RefObject<any>>(null);
  const cameraControlLarge = useRef<RefObject<any>>(null);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[75vh] w-full overflow-hidden md:h-[90vh]"
      >
        <Suspense fallback={<Fallback />}>
          <div
            className={classNames(
              {
                "right-[100%]": size === "large",
                "right-0": size === "small",
              },
              "absolute size-full top-0 transition-all duration-1000",
            )}
          >
            <Canvas
              camera={{
                fov: 90,
                position: [0, 0, 3],
              }}
            >
              <ModelView
                index={1}
                controlRef={cameraControlSmall}
                model={model}
              />
            </Canvas>
          </div>
        </Suspense>
        <Suspense fallback={null}>
          <div
            className={classNames(
              {
                "right-[-100%]": size === "small",
                "right-0": size === "large",
              },
              "absolute size-full top-0 transition-all duration-1000",
            )}
          >
            <Canvas
              camera={{
                fov: 90,
                position: [0, 0, 3],
              }}
            >
              <ModelView
                index={2}
                controlRef={cameraControlLarge}
                model={model}
              />
            </Canvas>
          </div>
        </Suspense>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <p className="text-center text-sm font-light">{model.title}</p>
        <div className="flex items-center justify-center gap-4">
          <ul className="flex items-center rounded-full gap-3 bg-zinc-900 p-4">
            {iphoneModels.map((item) => (
              <li className="size-6" key={item.id}>
                <button
                  className={classNames(
                    {
                      "border-blue-600 border-4": item.id === model.id,
                    },
                    "w-full h-full cursor-pointer rounded-full transition-all",
                  )}
                  style={{ backgroundColor: item.color[0] }}
                  onClick={() => setModel(item)}
                />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 rounded-full bg-zinc-900 p-1">
            {iphoneSizes.map(({ label, value }) => (
              <button
                key={label}
                className={classNames(
                  {
                    "bg-blue-600": size === value,
                    "bg-transparent text-white": size !== value,
                  },
                  "flex size-10 items-center justify-center rounded-full text-sm transition-all",
                )}
                onClick={() => setSize(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OverviewDesktop;
