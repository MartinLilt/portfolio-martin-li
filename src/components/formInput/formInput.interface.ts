import { HTMLProps } from "react";

export interface IFormGroupProps {
  name: string;
  label: string;
  control: any;
  defaultValue?: string;
  renderTag?: string;
}

export interface IInputElementProps extends HTMLProps<HTMLInputElement> {}
