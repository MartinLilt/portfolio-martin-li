import { ModalCookieEnums, ModalEnums } from "./modalContext.enum";

export type ModalTypes = ModalEnums | null;
export type ModalCookieTypes = ModalCookieEnums;

export interface IModalContextType {
  isModalOpen: ModalTypes;
  toggleModal: (modalType: ModalTypes) => void;
}