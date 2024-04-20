import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(
        "px-5 py-2 rounded-3xl bg-blue-600 my-5 hover:bg-transparent border border-transparent hover:border hover:text-blue-600 hover:border-blue-600 transition-all",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
