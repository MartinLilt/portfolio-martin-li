import { IconComponent, SectionTemplComponent } from "@/components";
import { FC } from "react";
import s from "./Resume.module.css";
import { IResumeProps } from "@/interfaces";

const Resume: FC<{ options: IResumeProps[] }> = ({ options }) => {
  return (
    <SectionTemplComponent title="Resume" className={s.section}>
      <ul className={s.list}>
        {options?.map(({ date, title, desc, logo }, index) => {
          return (
            <li key={index} className={s.sentence}>
              <div className="relative">
                <span className={s.date}>{`${date.start} - ${date.end}`}</span>
                <p className={s.name}>{title}</p>
                <span className={s.icon}>
                  <IconComponent nameIcon={logo} size={40} />
                </span>
              </div>
              <h4 className={s.supptitle}>
                <span className={s.description}>{desc}</span>
              </h4>
            </li>
          );
        })}
      </ul>
    </SectionTemplComponent>
  );
};

export default Resume;
