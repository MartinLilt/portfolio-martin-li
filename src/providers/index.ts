import BgCanvasProvider from "./bgCanvas/BgCanvas";
import ModalProvider from "./modalContext/ModalContext";

import { ModalContext } from "./modalContext/ModalContext";
import { ModalEnums } from "./modalContext/modalContext.enum";
import { ModalCookieEnums } from "./modalContext/modalContext.enum";
import { ModalTypes } from "./modalContext/modalContext.interface";
import { ModalCookieTypes } from "./modalContext/modalContext.interface";
import { IModalContextType } from "./modalContext/modalContext.interface";

export {
  BgCanvasProvider,
  ModalProvider,
  ModalContext,
  ModalEnums,
  ModalCookieEnums
};

export type { IModalContextType, ModalTypes, ModalCookieTypes };
