import { FC } from "react";
import s from "./Footer.module.css";
import { IconComponent } from "@/components";

const Footer: FC = () => {
  return (
    <footer className={s.section}>
      <div className="custom-c">
        <p className={s.copy}>
          &copy; 2023-2024 Martin.Li website portfolio | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
