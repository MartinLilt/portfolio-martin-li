import { ModalCookieEnums, ModalEnums } from "./modalContext.enum";

export type ModalCookieTypes = ModalCookieEnums;
export type ModalTypes = ModalEnums | null;

export interface IModalContextType {
  isModalOpen: ModalTypes;
  toggleModal: (state: ModalTypes) => void;
}