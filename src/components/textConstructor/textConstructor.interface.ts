import { HTMLProps, ReactNode } from "react";

export type TextTagTypes =
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export interface ITextConstructor {
  tag?: TextTagTypes;
  textLength: number;
  children: string;
  textClassName?: HTMLProps<HTMLElement>["className"];
}
