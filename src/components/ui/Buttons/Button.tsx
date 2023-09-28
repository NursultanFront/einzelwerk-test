import cn from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

type ButtonVariant = "primary" | "secondary" | "transparent";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
}

export const Button: FC<IButtonProps> = (props) => {
  const { className, variant = "primary", children, ...otherProps } = props;

  return (
    <button
      type="button"
      className={cn(className, {
        "bg-blue-600 hover:bg-blue-500": variant === "primary",
        "bg-white hover:bg-gray-400": variant === "secondary",
        "bg-transparent": variant === "transparent",
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};
