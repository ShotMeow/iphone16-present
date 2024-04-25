import { type FC } from "react";

import { useDevice } from "@/shared/hooks/useDevice";

import OverviewMobile from "./OverviewMobile";
import OverviewDesktop from "./OverviewDesktop";

const OverviewScene: FC = () => {
  const { isDesktop } = useDevice();
  return isDesktop ? <OverviewDesktop /> : <OverviewMobile />;
};

export default OverviewScene;
