import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  cardWidth?: "w-full" | "w-fit";
}

const Button = ({
  children,
  className,
  cardWidth = "w-full",
  ...rest
}: IProps) => {
  return (
    <button
      className={`${className} ${cardWidth} p-2 rounded-md text-white`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
