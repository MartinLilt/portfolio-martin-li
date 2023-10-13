import { FC, useEffect, useState } from "react";
import { ButtonConstrComponent } from "..";
import s from "./ModalTempl.module.css";
import { useModal, useCookies } from "@/hooks";
import { ModalEnums, ModalCookieEnums, ModalCookieTypes } from "@/providers";

const ModalScroll: FC = () => {
  const { toggleModal } = useModal();
  const [isActiveCookieBar, setCookieBar] = useState(true);
  const { setCookies, hasCookie } = useCookies();
  const { cookiesModal } = ModalEnums;

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
    if (!cookieValue) toggleModal(cookiesModal);
    setCookieBar(false);
  };

  return (
    <div
      className={s["scroll-section"]}
    >
      <div className={s["scroll-content"]}>
        <div className="md:px-4">
          <ButtonConstrComponent
            options={[
              {
                buttonTitle: "",
                className: s["scroll-lang"],
                event: () => setCookieBar((state) => !state),
                textContent: 'EN',
              },
              {
                buttonTitle: "",
                className: s["scroll-cookie"],
                event: () => setCookieBar((state) => !state),
                icon: { name: "MdCookie" },
              },
              {
                buttonTitle: "",
                className: s["scroll-arrow"],
                event: () => handleScrollToLink("up-arrow"),
                icon: { name: "AiOutlineArrowUp" },
              },
            ]}
          />
        </div>
      </div>
      <div
        className={s["scroll-box"]}
        style={{ display: !isActiveCookieBar ? "none" : "flex" }}
      >
        <p className={s["scroll-text"]}>
          We use cookies to enhance site navigation, analyse site usage, and
          assist in our marketing efforts.
        </p>
        <span className={s["scroll-container"]}>
          <ButtonConstrComponent
            options={[
              {
                buttonTitle: "",
                className: s["scroll-more"],
                event: () => handleToggleCookieState(),
                textContent: "...",
              },
              {
                buttonTitle: "",
                className: s["scroll-decline"],
                event: () =>
                  handleToggleCookieState(ModalCookieEnums.cookieRejectionAll),
                textContent: "Decline",
              },
              {
                buttonTitle: "",
                className: s["scroll-allow"],
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
