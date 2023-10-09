import { FC, ReactNode } from "react";
import { FooterContainer, HeaderContainer } from "..";
import s from "./Main.module.css";
import {
  ModalOverlayComponent,
  ModalScrollComponent,
  ModalToastComponent,
} from "@/components";
import { useModal } from "@/hooks";
import { ModalEnums } from "@/providers";

const Main: FC<{ children: ReactNode }> = ({ children }) => {
  const { mobileMenu, cookiesModal } = ModalEnums;
  const { isModalOpen } = useModal();

  const isModalOverlayOpen =
    isModalOpen === mobileMenu || isModalOpen === cookiesModal;

  return (
    <>
      <ModalToastComponent />
      <div
        className={s.content}
        style={
          isModalOverlayOpen
            ? { transform: "translateX(-100%)" }
            : { transform: "translateX(0%)" }
        }
      >
        <div>
          <HeaderContainer />
          <main className={s.box}>{children}</main>

          <FooterContainer />
        </div>
        <ModalOverlayComponent />
      </div>
      <ModalScrollComponent />
    </>
  );
};

export default Main;
