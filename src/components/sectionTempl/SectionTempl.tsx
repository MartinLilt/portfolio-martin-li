import { FC } from "react";
import s from "./SectionTempl.module.css";
import { ISectionTemplProps } from "./sectionTempl.interface";

const SectionTempl: FC<ISectionTemplProps> = ({
  children,
  sectionType,
  sectionId,
  className,
  containerCSS,
  title,
}) => {
  const Section = sectionType || "section";
  return (
    <Section className={`${className}`}>
      {sectionId && <div id={sectionId} className="-translate-y-12" />}
      <div className={`custom-c ${containerCSS}`}>
        <h3 className={s.title}>{title}</h3>
        {children}
      </div>
    </Section>
  );
};

export default SectionTempl;
