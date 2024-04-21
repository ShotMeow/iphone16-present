import type { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGSVGElement> {}

const Replay: FC<Props> = ({ width = 56, height = 56, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
    >
      <path
        d="M37.3,26.7c-1,0.1-1.8,1-1.8,2c0,4.1-3.4,7.4-7.5,7.4c-4.1,0-7.4-3.4-7.4-7.5c0-4.1,3.3-7.4,7.5-7.4l0.1,0l0.2,0l0.5,0 l-2.2,2.2c-0.8,0.8-0.8,2.1,0,2.9c0.7,0.7,1.9,0.8,2.7,0.2l0.2-0.2l5.3-5.3c0.7-0.7,0.8-1.9,0.2-2.7l-0.2-0.2l-5.3-5.3 c-0.8-0.8-2.1-0.8-2.8,0c0,0,0,0,0,0c-0.7,0.7-0.8,1.9-0.1,2.7l0.1,0.2l1.4,1.4l-0.5,0c-6.4,0.2-11.3,5.6-11.1,11.9 S22,40.5,28.4,40.2c6.2-0.2,11.1-5.3,11.1-11.5c0-1-0.8-1.9-1.8-2l-0.2,0L37.3,26.7z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default Replay;
