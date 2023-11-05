import { IconComponent, SectionTemplComponent } from "@/components";
import { FC } from "react";
import s from "./Skills.module.css";
import { ISkillPreview } from "@/interfaces";

const Skills: FC<{ options: ISkillPreview[] }> = ({ options }) => {
  return (
    <SectionTemplComponent title="Skills" className={s.section}>
      <ul className={s.list}>
        {options
          ?.sort(
            (firstSortObject, secondSortObject) =>
              secondSortObject.progress - firstSortObject.progress
          )
          ?.map(({ title, icon, progress, tags }, index) => {
            return (
              <li key={index} className={s.sentence}>
                <p className={s.experience}>Experience level:</p>
                <div className="text-primary">
                  <span className={s.content}>
                    <span
                      className={s.progressbar}
                      style={{ width: `${progress}%` }}
                    ></span>
                    <IconComponent nameIcon={icon} size={40} />
                    <span className={s.progress}>{`${progress} %`}</span>
                  </span>
                  <p className={s.skill}>{title}</p>
                </div>
                <ul className={s.taglist}>
                  {tags?.map((item, index) => {
                    return (
                      <li key={index} className={s.tagsentence}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
      </ul>
    </SectionTemplComponent>
  );
};

export default Skills;
