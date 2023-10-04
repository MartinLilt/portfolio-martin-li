import { ModalEnums } from "./modalContext.enum";

export type ModalTypes = ModalEnums | null;

export interface IModalContextType {
  isModalOpen: ModalTypes;
  toggleModal: (modalType: ModalTypes) => void;
}