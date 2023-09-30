import { FC } from "react";
import { IconComponent, LogoComponent } from "@/components";
import s from './Header.module.css'

const Header: FC = () => {
  return (
    <header className={s.section}>
      <LogoComponent logoSize={24} />
      <nav className={s.nav}>
        <ul className={s.list}>
          {[
            { anchor: "#home", page: "Home" },
            { anchor: "#about", page: "About" },
            { anchor: "#service", page: "Services" },
            { anchor: "#testimonials", page: "Testimonials" },
            { anchor: "#contact", page: "Contacts" },
          ].map((item, index) => {
            return (
              <li
                key={index}
                title={`Click to move from ${item.anchor} section.`}
                className={s.sentence}
              >
                {item.page}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex">
        <a
          href="mailto:question@limihub.info"
          title="Click to send me your mail..."
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          <span className={s.action}>Drop me a line</span>
          <IconComponent nameIcon={"MdOutgoingMail"} propsIcon={{ size: 25 }} />
        </a>
        <button
          type="button"
          className={s.button}
        >
          <IconComponent nameIcon={"VscMenu"} propsIcon={{ size: 25 }} />
        </button>
      </div>
    </header>
  );
};

export default Header;
