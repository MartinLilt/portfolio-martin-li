import { FC, PropsWithChildren } from "react";
import { FooterContainer, HeaderContainer } from "..";
import s from "./Main.module.css";
import { ModalOverlayComponent } from "@/components";
import { Sora } from "next/font/google";
import { ISocialMediaPreview } from "@/interfaces";

const font = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Main: FC<PropsWithChildren<{ options?: ISocialMediaPreview[] }>> = ({
  children,
  options,
}) => {
  return (
    <div className={font.className}>
      <ModalOverlayComponent options={options} />
      <HeaderContainer />
      <main className={s.box}>{children}</main>
      <FooterContainer />
    </div>
  );
};

export default Main;
