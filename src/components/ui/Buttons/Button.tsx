import cn from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, onClick, ...otherProps } = props;

  return (
    <button
      type="button"
      className={cn(className)}
      {...otherProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
