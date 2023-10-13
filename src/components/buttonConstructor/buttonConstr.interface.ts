import { CSSProperties, HTMLProps } from "react";

export interface IButtonConstructorProps {
  buttonTitle: string;
  className?: HTMLProps<HTMLElement>["className"];
  styles?: CSSProperties;
  isButtonDisabled?: boolean;
  icon?: {
    name: string;
    size?: number;
  };
  event: () => void;
  textContent?: string;
}

export interface IButtonConstructorOptions {
  options: IButtonConstructorProps[];
}
