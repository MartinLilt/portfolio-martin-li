import { FC } from "react";
import { IconComponent, LogoComponent, NavListComponent } from "@/components";
import s from "./Header.module.css";
import { useModal } from "@/hooks";
import { ModalEnums } from "@/providers";

const Header: FC = () => {
  const { toggleModal } = useModal();

  return (
    <>
      <div id="up-arrow" className="-translate-y-12" />
      <header className={s.section}>
        <LogoComponent logoSize={24} />
        <NavListComponent
          navListStyles="hidden xl:block"
          options={[
            { anchor: "home", anchorText: "Home", anchorDesc: "" },
            { anchor: "about", anchorText: "About", anchorDesc: "" },
            { anchor: "service", anchorText: "Services", anchorDesc: "" },
            {
              anchor: "testimonials",
              anchorText: "Testimonials",
              anchorDesc: "",
            },
            { anchor: "feedback", anchorText: "Contacts", anchorDesc: "" },
          ]}
        />
        <div className="flex">
          <a
            href="mailto:question@limihub.info"
            title="Click to send me your mail..."
            target="_blank"
            rel="noopener noreferrer"
            className={s.link}
          >
            <span className={s.action}>Drop me a line</span>
            <IconComponent
              nameIcon={"MdOutgoingMail"}
            />
          </a>
          <button
            type="button"
            className={s.button}
            onClick={() => toggleModal(ModalEnums.mobileMenu)}
          >
            <IconComponent nameIcon={"FiMenu"} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
