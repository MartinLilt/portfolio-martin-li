import React, { FC, ReactNode, createContext, useState } from "react";
import { IModalContextType, ModalTypes } from "./modalContext.interface";

export const ModalContext = createContext<IModalContextType | null>(null);

const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<ModalTypes>(null);

  const toggleModal = (state: ModalTypes) => {
    setIsModalOpen(state);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
