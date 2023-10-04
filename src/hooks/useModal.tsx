import { IModalContextType, ModalContext } from "@/providers";
import { useContext } from "react";

export function useModal(): IModalContextType {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
