import { FC, useEffect, useState } from "react";
import { ButtonConstrComponent } from "..";
import s from "./ModalTempl.module.css";
import { useModal, useCookies } from "@/hooks";
import { ModalEnums, ModalCookieEnums, ModalCookieTypes } from "@/providers";

const ModalScroll: FC = () => {
  const { isModalOpen, toggleModal } = useModal();
  const [isActiveCookieBar, setCookieBar] = useState(true);
  const { setCookies, hasCookie } = useCookies();

  useEffect(() => {
    if (hasCookie) {
      setCookieBar(false);
    }
  }, [hasCookie]);

  const handleScrollToLink = (anchor: string) => {
    if (document) {
      const selectedElement = document.getElementById(anchor);
      selectedElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleToggleCookieState = (cookieValue?: ModalCookieTypes) => {
    if (cookieValue) setCookies(cookieValue);
    if (!cookieValue) toggleModal(ModalEnums.cookiesModal);
    setCookieBar(false);
  };

  return (
    <div
      className="px-4 fixed bottom-0 w-full 
      pointer-events-none h-[395px] flex-col justify-between"
      style={{ display: isModalOpen ? "none" : "flex" }}
    >
      <div className="flex justify-end">
        <div>
          <ButtonConstrComponent
            options={[
              {
                buttonTitle: "",
                buttonCustomStyles:
                  "icon-button pointer-events-auto back-shadow w-min",
                event: () => setCookieBar((state) => !state),
                icon: { name: "MdCookie", size: 25 },
              },
              {
                buttonTitle: "",
                buttonCustomStyles:
                  "icon-button pointer-events-auto mt-4 back-shadow w-min",
                event: () => handleScrollToLink("up-arrow"),
                icon: { name: "AiOutlineArrowUp", size: 25 },
              },
            ]}
          />
        </div>
      </div>
      <div
        className="border-wrap bg-secondary xl:flex xl:justify-between xl:items-center"
        style={{ display: !isActiveCookieBar ? "none" : "block" }}
      >
        <p className="text mb-4 xl:mb-0">
          We use cookies to enhance site navigation, analyse site usage, and
          assist in our marketing efforts.
        </p>
        <span className="flex justify-end pointer-events-auto">
          <ButtonConstrComponent
            options={[
              {
                buttonTitle: "",
                buttonNewStyles: `p-4 mr-4 border-[0.05rem] 
                border-transparent hover:border-accent rounded-xl`,
                event: () => handleToggleCookieState(),
                textContent: "...",
              },
              {
                buttonTitle: "",
                buttonNewStyles: `border-[0.05rem] border-primary p-4 
                text-secondary bg-primary rounded-xl hover:text-primary 
                hover:bg-secondary mr-4`,
                event: () =>
                  handleToggleCookieState(ModalCookieEnums.cookieRejectionAll),
                textContent: "Decline",
              },
              {
                buttonTitle: "",
                buttonNewStyles: `border-[0.05rem] border-primary 
                p-4 rounded-xl hover:border-accent`,
                event: () =>
                  handleToggleCookieState(ModalCookieEnums.cookieConsentAll),
                textContent: "Allow all",
              },
            ]}
          />
        </span>
      </div>
    </div>
  );
};

export default ModalScroll;
