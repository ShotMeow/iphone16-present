import type { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGSVGElement> {}

const Play: FC<Props> = ({ width = 56, height = 56, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
    >
      <path
        d="M20.8,36V20c0-1.6,1-2.5,2.3-2.5c0.7,0,1.1,0.1,1.7,0.5l13.4,7.7c1.2,0.7,1.8,1.2,1.8,2.3 c0,1.1-0.6,1.6-1.8,2.3L24.8,38c-0.6,0.4-1,0.5-1.7,0.5C21.8,38.5,20.8,37.6,20.8,36"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default Play;
