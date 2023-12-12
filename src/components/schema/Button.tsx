import { ButtonHTMLAttributes, ReactNode, memo } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  cardWidth?: "w-full" | "w-fit";
}

// eslint-disable-next-line react-refresh/only-export-components
const Button = ({
  children,
  className,
  cardWidth = "w-full",
  ...rest
}: IProps) => {
  return (
    <button
      className={`${className} ${cardWidth} rounded-lg text-white px-3 py-3 duration-200 font-medium`}
      {...rest}
    >
      {children}
    </button>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Button);
