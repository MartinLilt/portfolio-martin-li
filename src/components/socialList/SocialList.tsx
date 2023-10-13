import { FC } from "react";
import s from "./SocialList.module.css";
import { IconComponent } from "..";
import { ISocialOptions } from "./socialList.interface";

const SocialList: FC<ISocialOptions> = ({ options }) => {
  return (
    <ul className={s.list}>
      {options?.map(({ link: { href, alt }, icon }, index) => {
        return (
          <li key={index} className={s.sentence}>
            <a
              href={href}
              title={`Click to open my ${alt}..`}
              target="_blank"
              rel="noopener noreferrer"
              className={s.link}
            >
              <IconComponent nameIcon={icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
