import { IToastContextType, ToastContext } from "@/providers";
import { useContext } from "react";

export function useToast(): IToastContextType {
  const context = useContext(ToastContext);
  if (context === null) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
