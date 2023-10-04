import React, { FC, ReactNode, createContext, useState } from "react";
import { IModalContextType, ModalTypes } from "./modalContext.interface";

export const ModalContext = createContext<IModalContextType | null>(null);

const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<ModalTypes>(null);

  const toggleModal = (modalType: ModalTypes) => {
    setIsModalOpen((prevModalType) =>
      prevModalType === modalType ? null : modalType
    );
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
