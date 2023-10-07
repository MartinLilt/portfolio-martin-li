import { FC, ReactNode } from "react";
import { FooterContainer, HeaderContainer } from "..";
import s from "./Main.module.css";
import { ModalMobileComponent, ModalOverlayComponent, ModalScrollComponent } from "@/components";
import { useModal } from "@/hooks";

const Main: FC<{ children: ReactNode }> = ({ children }) => {
  const { isModalOpen } = useModal();
  return (
    <>
      <div
        className={s.content}
        style={
          isModalOpen
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
