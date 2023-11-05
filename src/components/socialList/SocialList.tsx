import { FC } from "react";
import s from "./SocialList.module.css";
import { IconComponent } from "..";
import { ISocialMediaPreview } from "@/interfaces";

const SocialList: FC<{ options?: ISocialMediaPreview[] }> = ({ options }) => {
  return (
    <ul className={s.list}>
      {options?.map(({ iconName, iconReact, iconUrl }, index) => {
        return (
          <li key={index} className={s.sentence}>
            <a
              href={iconUrl}
              title={`Click to open my ${iconName}..`}
              target="_blank"
              rel="noopener noreferrer"
              className={s.link}
            >
              <IconComponent nameIcon={iconReact} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
