import { CSSProperties, HTMLProps, ReactNode } from "react";

export interface IButtin {
  children: ReactNode | string;
  buttonType?: "button" | "submit";
  buttonTitle: string;
  className?: HTMLProps<HTMLElement>["className"];
  styles?: CSSProperties;
  isButtonDisabled?: boolean;
  onClickEvent?: () => void;
}
