import { FC, useState } from "react";
import s from "./ModalTempl.module.css";
import { useCookies, useModal } from "@/hooks";
import { ModalCookieEnums, ModalCookieTypes, ModalEnums } from "@/providers";
import { ButtonConstrComponent, IconComponent } from "..";

const ModalCookies: FC = () => {
  const { isModalOpen, toggleModal } = useModal();
  const [checkboxState, setCheckboxState] = useState<boolean>(false);
  const { cookiesModal } = ModalEnums;
  const { cookieConsentAll, cookieConsentCustom, cookieRejectionAll } =
    ModalCookieEnums;
  const { setCookies } = useCookies();

  const handleToggleButton = (cookieValue: ModalCookieTypes) => {
    const isCustomCookies = cookieValue === cookieConsentCustom;
    if (isCustomCookies)
      setCookies(`${cookieValue}-performance-${checkboxState}`);
    if (!isCustomCookies) setCookies(cookieValue);
    toggleModal(null);
  };

  return (
    <div
      style={{
        display: isModalOpen === cookiesModal ? "block" : "none",
      }}
    >
      <ul className="mb-20">
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
            <li key={index} className="mb-20 last:mb-0">
              <div>
                <p className="title mb-4">{title}</p>
                {index === 2 && (
                  <label
                    className="w-28 h-14 flex items-center 
                  relative cursor-pointer mb-4"
                  >
                    <input
                      type="checkbox"
                      className="hidden peer"
                      onChange={() => setCheckboxState((state) => !state)}
                    />
                    <div
                      className="w-full h-2/5 border-[0.05rem] border-op-primary 
                    rounded-md peer-checked:border-primary"
                    ></div>
                    <span
                      className={`${s.like} peer-checked:translate-x-14
                     peer-checked:border-accent peer-checked:text-primary
                      peer-checked:bg-secondary`}
                    >
                      {checkboxState ? (
                        <IconComponent
                          nameIcon={"AiFillLike"}
                          propsIcon={{ size: 25 }}
                        />
                      ) : (
                        <IconComponent
                          nameIcon={"AiFillDislike"}
                          propsIcon={{ size: 25 }}
                        />
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
      <ButtonConstrComponent
        options={[
          {
            buttonTitle: "",
            buttonCustomStyles: `w-full mb-4 hover:!border-accent 
            hover:!bg-secondary hover:!text-primary text-start`,
            event: () => handleToggleButton(cookieConsentCustom),
            textContent: "Confirm",
          },
          {
            buttonTitle: "",
            buttonCustomStyles: `w-full mb-4 hover:!border-accent 
            hover:!bg-secondary hover:!text-primary text-start`,
            event: () => handleToggleButton(cookieRejectionAll),
            textContent: "Reject all",
          },
          {
            buttonTitle: "",
            buttonNewStyles: `w-full text-start border-[0.05rem] border-primary p-4 
            rounded-xl bg-primary text-secondary hover:bg-secondary hover:text-primary`,
            event: () => handleToggleButton(cookieConsentAll),
            textContent: "Allow all",
            isButtonDisabled: checkboxState,
          },
        ]}
      />
    </div>
  );
};

export default ModalCookies;
