import { FC, ReactNode } from "react";
import { FooterContainer, HeaderContainer } from "..";
import s from "./Main.module.css";
import { ModalOverlayComponent } from "@/components";
import { Sora } from "next/font/google";

const font = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={font.className}>
      <ModalOverlayComponent />
      <HeaderContainer />
      <main className={s.box}>{children}</main>
      <FooterContainer />
    </div>
  );
};

export default Main;
