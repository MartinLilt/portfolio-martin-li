import { FC } from "react";
import s from "./NavList.module.css";
import { INavOptions } from "./navList.interface";

const NavList: FC<INavOptions> = ({ options, navListStyles }) => {
  return (
    <nav className={`${s.nav} ${navListStyles}`}>
      <ul className={s.list}>
        {options?.map((item, index) => {
          return (
            <li
              key={index}
              title={`Click to move from ${item.anchor} section.`}
              className={s.sentence}
            >
              <p className={s['anchor-text']}>{item.anchorText}</p>
              <p className={s['anchor-desc']}>{item.anchorDesc}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavList;
