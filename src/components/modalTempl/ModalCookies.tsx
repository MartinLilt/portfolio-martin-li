import { FC, useEffect, useState } from "react";
import s from "./ModalTempl.module.css";
import { useCookies, useModal } from "@/hooks";
import { ModalCookieEnums, ModalCookieTypes } from "@/providers";
import { ButtonConstrComponent, IconComponent } from "..";

const ModalCookies: FC<{ display: boolean }> = ({ display }) => {
  const isDisplay = display ? "block" : "none";
  const { toggleModal } = useModal();
  const [checkboxState, setCheckboxState] = useState<boolean>(false);
  const { cookieConsentAll, cookieConsentCustom, cookieRejectionAll } =
    ModalCookieEnums;
  const { setCookies, hasCookie } = useCookies();

  const handleToggleButton = (cookieValue: ModalCookieTypes) => {
    const isCustomCookies = cookieValue === cookieConsentCustom;
    if (isCustomCookies)
      setCookies(`${cookieValue}-performance-${checkboxState}`);
    if (!isCustomCookies) setCookies(cookieValue);
    toggleModal(null);
  };

  useEffect(() => {
    if (hasCookie && !checkboxState) {
      setCheckboxState(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        display: isDisplay,
      }}
    >
      <ul className={s["cookie-list"]}>
        {[
          {
            title: "Your Privacy",
            desc: `When you visit any website, it may store or
         retrieve information on your browser, mostly in the form of cookies. 
         This information might be about you, your preferences or your device 
         and is mostly used to make the site work as you expect it to. 
         The information does not usually directly identify you, but it 
         can give you a more personalized web experience. Because we 
         respect your right to privacy, you can choose not to allow some 
         types of cookies. Click on the different category headings to 
         find out more and change our default settings. However, blocking 
         some types of cookies may impact your experience of the site 
         and the services we are able to offer.`,
          },
          {
            title: "Strictly Necessary Cookies",
            desc: `These cookies are 
          necessary for the website to function and cannot be switched 
          off in our systems. They are usually only set in response to 
          actions made by you which amount to a request for services, 
          such as setting your privacy preferences, logging in or 
          filling in forms. You can set your browser to block or 
          alert you about these cookies, but some parts of 
          the site will not then work. These cookies 
          do not store any personally identifiable information.`,
          },
          {
            title: "Performance Cookies",
            desc: `These cookies allow us to 
          count visits and traffic sources so we can measure and improve 
          the performance of our site. They help us to know which pages 
          are the most and least popular and see how visitors move around 
          the site. All information these cookies collect is aggregated 
          and therefore anonymous. If you do not allow these cookies we 
          will not know when you have visited our site, and will not 
          be able to monitor its performance.`,
          },
        ].map(({ title, desc }, index) => {
          return (
            <li key={index} className={s["cookie-sentence"]}>
              <div>
                <p className={s["cookie-title"]}>{title}</p>
                {index === 2 && (
                  <label className={s["cookie-label"]}>
                    <input
                      type="checkbox"
                      className="hidden"
                      onChange={() => setCheckboxState((state) => !state)}
                    />
                    <div className={`${s["cookie-checkbox"]}`}></div>
                    <span
                      className={`${s.like} !scale-100 ${
                        checkboxState ? "translate-x-14" : "translate-x-0"
                      }
                     `}
                    >
                      {checkboxState && hasCookie ? (
                        <IconComponent nameIcon={"AiFillLike"} />
                      ) : (
                        <IconComponent nameIcon={"AiFillDislike"} />
                      )}
                    </span>
                  </label>
                )}
              </div>
              <p className="text">{desc}</p>
            </li>
          );
        })}
      </ul>
      <div className={s["cookie-box"]}>
        <ButtonConstrComponent
          options={[
            {
              buttonTitle: "",
              className: s["cookie-confirm"],
              event: () => handleToggleButton(cookieConsentCustom),
              textContent: "Confirm",
            },
            {
              buttonTitle: "",
              className: s["cookie-reject"],
              event: () => handleToggleButton(cookieRejectionAll),
              textContent: "Reject all",
            },
            {
              buttonTitle: "",
              className: s["cookie-allow"],
              event: () => handleToggleButton(cookieConsentAll),
              textContent: "Allow all",
              isButtonDisabled: checkboxState,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ModalCookies;
