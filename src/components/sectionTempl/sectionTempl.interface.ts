import { HTMLProps, ReactNode } from "react";

type SectionType = "header" | "footer";

export interface ISectionTemplProps {
  children: ReactNode;
  sectionType?: SectionType;
  sectionId?: string;
  className?: HTMLProps<HTMLElement>["className"];
  containerCSS?: HTMLProps<HTMLElement>["className"];
  title?: string;
}