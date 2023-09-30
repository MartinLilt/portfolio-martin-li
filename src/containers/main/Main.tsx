import { FC, ReactNode } from "react";
import { FooterContainer, HeaderContainer } from "..";
import s from './Main.module.css'

const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <main className={s.box}>{children}</main>
      <FooterContainer />
    </>
  );
};

export default Main;
