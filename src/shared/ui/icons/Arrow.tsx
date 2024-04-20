import type { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGSVGElement> {}

const Arrow: FC<Props> = ({ width = 7, height = 11, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.768979 11C0.557083 11 0.375946 10.9265 0.225567 10.7796C0.0751891 10.6326 0 10.4532 0 10.2413C0 10.0294 0.0786068 9.84482 0.23582 9.68761L4.37806 5.55563L0.23582 1.42364C0.0786068 1.26643 0 1.08187 0 0.869977C0 0.65808 0.0751891 0.478652 0.225567 0.331692C0.375946 0.184731 0.557083 0.111251 0.768979 0.111251C0.967205 0.111251 1.14492 0.183022 1.30214 0.326565L5.97753 4.98145C6.14158 5.13183 6.22361 5.32322 6.22361 5.55563C6.22361 5.77436 6.14158 5.96575 5.97753 6.1298L1.30214 10.7847C1.1586 10.9282 0.980876 11 0.768979 11Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Arrow;
