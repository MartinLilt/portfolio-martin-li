import { ModalCookieEnums, ModalCookieTypes } from "@/providers";
import { setCookie, hasCookie } from "cookies-next";

type CustomCookie =
  `${ModalCookieEnums.cookieConsentCustom}-performance-${boolean}`;

export function useCookies() {
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  const setCookieValue = (value: ModalCookieTypes | CustomCookie) => {
    setCookie("cookieAction", value, { expires: oneYearFromNow });
  };

  const hasCookieValue = () => {
    return hasCookie("cookieAction");
  };

  return {
    setCookies: setCookieValue,
    hasCookie: hasCookieValue(),
  };
}
