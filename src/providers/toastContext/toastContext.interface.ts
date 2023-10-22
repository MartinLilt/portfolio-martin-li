import { ToastEnums } from "./toastContext.enum";

export type ToastTypes = ToastEnums;

export interface IToastContextProps {
  type: ToastTypes | null;
  message: string;
}

export interface IToastContextType {
  toastState: IToastContextProps;
  toggleToastState: (state: IToastContextProps) => void;
}
