import { FC, useEffect } from "react";
import s from "./ModalTempl.module.css";
import { useModal } from "@/hooks";
import {
  ButtonComponent,
  IconComponent,
  NavListComponent,
  SocialListComponent,
} from "..";

const ModalMobile: FC = () => {
  const { isModalOpen, toggleModal } = useModal();

  useEffect(() => {
    if (document.body) {
      document.body.style.overflowY = isModalOpen ? "hidden" : "auto";
    }
  }, [isModalOpen]);

  return (
    <div className={s.overlay}>
      <div className={s.box}>
        <SocialListComponent
          options={[
            {
              link: {
                href: "https://www.linkedin.com/in/martin-liminovic-44046b21a/",
                alt: "linkedin",
              },
              icon: "RiLinkedinFill",
            },
            {
              link: { href: "https://t.me/limi_amm", alt: "telegram" },
              icon: "FaTelegram",
            },
            {
              link: { href: "https://wa.me/37065866504", alt: "whatsapp" },
              icon: "RiWhatsappFill",
            },
            {
              link: {
                href: "https://github.com/MartinLilt",
                alt: "github",
              },
              icon: "BiLogoGithub",
            },
            {
              link: {
                href: "https://www.upwork.com/freelancers/~013353693d309695d7",
                alt: "upwork",
              },
              icon: "BiLogoUpwork",
            },
            {
              link: {
                href: "https://www.fiverr.com/martinliminovic?up_rollout=true",
                alt: "fiverr",
              },
              icon: "TbBrandFiverr",
            },
          ]}
        />
        <ButtonComponent
          buttonTitle={"Click to close modal.."}
          onClickEvent={() => toggleModal(null)}
        >
          <IconComponent nameIcon={"VscChromeClose"} propsIcon={{ size: 25 }} />
        </ButtonComponent>
      </div>
      <div className={s.content}>
        <div className="custom-c">
          <h3 className={s.title}>Menu</h3>
          <NavListComponent
            options={[
              { anchor: "home", anchorText: "Home", anchorDesc: 'Modern and mobile-ready website.' },
              { anchor: "about", anchorText: "About", anchorDesc: 'Modern and mobile-ready website' },
              { anchor: "service", anchorText: "Services", anchorDesc: 'Modern and mobile-ready website' },
              { anchor: "testimonials", anchorText: "Testimonials", anchorDesc: 'Modern and mobile-ready website' },
              { anchor: "feedback", anchorText: "Contacts", anchorDesc: 'Modern and mobile-ready website' },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalMobile;
