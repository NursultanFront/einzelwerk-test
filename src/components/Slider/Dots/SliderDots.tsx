import { Button } from "@/components/ui/Buttons/Button";
import { PropsWithChildren, ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

export const SliderDots: React.FC<PropsWithChildren<IProps>> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <Button variant="transparent" className={props.className} {...otherProps}>
      {props.children}
    </Button>
  );
};
