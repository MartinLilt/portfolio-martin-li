import { FC } from "react";
import s from "./NavList.module.css";
import { INavOptions } from "./navList.interface";
import { useModal } from "@/hooks";

const NavList: FC<INavOptions> = ({ options, navListStyles }) => {
  const { isModalOpen, toggleModal } = useModal();

  const handleScrollToLink = (anchor: string) => {
    if (document) {
      const selectedElement = document.getElementById(anchor);
      if (isModalOpen) toggleModal(null);
      selectedElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`${s.nav} ${navListStyles}`}>
      <ul className={s.list}>
        {options?.map((item, index) => {
          return (
            <li
              key={index}
              title={`Click to move from ${item.anchor} section.`}
              className={s.sentence}
              onClick={() => handleScrollToLink(item.anchor)}
            >
              <p className={s["anchor-text"]}>{item.anchorText}</p>
              <p className={s["anchor-desc"]}>{item.anchorDesc}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavList;
