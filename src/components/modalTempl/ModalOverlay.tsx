import { FC, useEffect } from "react";
import s from "./ModalTempl.module.css";
import {
  ButtonComponent,
  IconComponent,
  ModalCookiesComponent,
  ModalMobileComponent,
  ModalScrollComponent,
  SocialListComponent,
} from "..";
import { useModal } from "@/hooks";
import { ModalEnums } from "@/providers";
import { IModalOverlayState } from "./modal.interface";
import { useMediaQuery } from "react-responsive";
import { ISocialMediaPreview } from "@/interfaces";

const ModalOverlay: FC<{ options?: ISocialMediaPreview[] }> = ({ options }) => {
  const { mobileMenu, cookiesModal } = ModalEnums;
  const { isModalOpen, toggleModal } = useModal();
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isMobileModal = isModalOpen === mobileMenu;
  const isCookiesModal = isModalOpen === cookiesModal;
  const modalStateArray: IModalOverlayState[] = [
    { display: "block", overflow: "hidden" },
    { display: "none", overflow: "auto" },
  ];

  const isMainModalOpen =
    modalStateArray[isMobileModal || isCookiesModal ? 0 : 1];
  const { display, overflow } = isMainModalOpen;

  useEffect(() => {
    document.body.style.overflowY = overflow;
  }, [isMainModalOpen, overflow]);

  useEffect(() => {
    if (isMobileModal && isDesktop) {
      toggleModal(null);
    }
  }, [isMobileModal, isDesktop, toggleModal]);

  return (
    <>
      <ModalScrollComponent />
      <div className={s.overlay} style={{ display }}>
        <div className={s.box}>
          <SocialListComponent
            options={options}
          />
          <ButtonComponent
            buttonTitle={"Click to close modal.."}
            className="btn p-hover ml-auto p-4"
            onClickEvent={() => toggleModal(null)}
          >
            <IconComponent nameIcon={"VscChromeClose"} />
          </ButtonComponent>
        </div>
        <div className={s.content}>
          <div className="custom-c pb-20">
            <h3 className={s["overlay-title"]}>
              {(isMobileModal && "Menu") || (isCookiesModal && "Cookies")}
            </h3>
            <ModalMobileComponent display={isMobileModal} />
            <ModalCookiesComponent display={isCookiesModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalOverlay;
