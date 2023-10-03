import { FC } from "react";
import s from "./SectionTempl.module.css";
import { ISectionTemplProps } from "./sectionTempl.interface";

const SectionTempl: FC<ISectionTemplProps> = ({
  children,
  sectionType,
  sectionId,
  styles,
  title
}) => {
  const Section = sectionType || "section";
  return (
    <Section className={`${styles}`} id={sectionId}>
      <div className="custom-c">
        <h3 className={s.title}>{title}</h3>
        {children}
      </div>
    </Section>
  );
};

export default SectionTempl;
