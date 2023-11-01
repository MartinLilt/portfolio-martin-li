import { FC, ReactNode, createContext, useState } from "react";
import {
  IToastContextType,
  IToastContextProps,
} from "./toastContext.interface";

export const ToastContext = createContext<IToastContextType | null>(null);

const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toastState, setToastState] = useState<IToastContextProps>({
    type: null,
    message: "",
  });

  const toggleToastState = (state: IToastContextProps) => {
    const { type, message } = state;
    setToastState({ type, message });
  };

  return (
    <ToastContext.Provider value={{toastState, toggleToastState}}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
