import { CSSProperties, ReactNode } from "react";

type SectionType = "header" | "footer";

export interface ISectionTemplProps {
  children: ReactNode;
  sectionType?: SectionType;
  sectionId?: string;
  styles?: string | CSSProperties;
  title?: string;
}