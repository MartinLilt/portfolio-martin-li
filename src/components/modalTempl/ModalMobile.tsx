import { FC, useEffect } from "react";
import s from "./ModalTempl.module.css";
import { useModal } from "@/hooks";
import { NavListComponent } from "..";
import { ModalEnums } from "@/providers";

const ModalMobile: FC = () => {
  const { isModalOpen } = useModal();

  useEffect(() => {
    if (document.body) {
      document.body.style.overflowY = isModalOpen ? "hidden" : "auto";
    }
  }, [isModalOpen]);

  return (
    <div
      style={{
        display: isModalOpen !== ModalEnums.mobileMenu ? "none" : "block",
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
