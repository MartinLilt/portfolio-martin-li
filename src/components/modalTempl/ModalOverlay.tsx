import { FC } from "react";
import s from "./ModalTempl.module.css";
import {
  ButtonComponent,
  IconComponent,
  ModalCookiesComponent,
  ModalMobileComponent,
  SocialListComponent,
} from "..";
import { useModal } from "@/hooks";
import { ModalEnums } from "@/providers";

const ModalOverlay: FC = () => {
  const { mobileMenu, cookiesModal } = ModalEnums;
  const { isModalOpen, toggleModal } = useModal();

  const modalTitile =
    (isModalOpen === mobileMenu && "Menu") ||
    (isModalOpen === cookiesModal && "Cookies");

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
        <div className="custom-c pb-20">
          <h3 className={s.title}>{modalTitile}</h3>
          <ModalMobileComponent />
          <ModalCookiesComponent />
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
