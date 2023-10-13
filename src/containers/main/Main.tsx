import { FC, ReactNode } from "react";
import { FooterContainer, HeaderContainer } from "..";
import s from "./Main.module.css";
import { ModalOverlayComponent } from "@/components";

const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ModalOverlayComponent />
      <HeaderContainer />
      <main className={s.box}>{children}</main>
      <FooterContainer />
    </>
  );
};

export default Main;
