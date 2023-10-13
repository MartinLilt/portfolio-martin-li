import { FC, useEffect } from "react";
import s from "./ModalTempl.module.css";
import { useModal } from "@/hooks";
import { NavListComponent } from "..";
import { ModalEnums } from "@/providers";

const ModalMobile: FC<{ display: boolean }> = ({ display }) => {
  const isDisplay = display ? "block" : "none";
  return (
    <div
      style={{
        display: isDisplay,
      }}
    >
      <NavListComponent
        options={[
          {
            anchor: "home",
            anchorText: "Home",
            anchorDesc: "Modern and mobile-ready website.",
          },
          {
            anchor: "about",
            anchorText: "About",
            anchorDesc: "Modern and mobile-ready website",
          },
          {
            anchor: "service",
            anchorText: "Services",
            anchorDesc: "Modern and mobile-ready website",
          },
          {
            anchor: "testimonials",
            anchorText: "Testimonials",
            anchorDesc: "Modern and mobile-ready website",
          },
          {
            anchor: "feedback",
            anchorText: "Contacts",
            anchorDesc: "Modern and mobile-ready website",
          },
        ]}
      />
    </div>
  );
};

export default ModalMobile;
