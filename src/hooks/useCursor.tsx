import { CursorContext, ICursorContextType } from "@/providers";
import { useContext } from "react";

export function useCursor(): ICursorContextType {
  const context = useContext(CursorContext);
  if (context === null) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
