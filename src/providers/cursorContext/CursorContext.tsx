import { FC, ReactNode, createContext, useCallback, useState } from "react";
import { CursorTypes, ICursorContextType } from "./cursorContext.interface";
import { CursorEnums } from "./cursorContext.enum";

export const CursorContext = createContext<ICursorContextType | null>(null);

const CursorProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cursorState, setCursorState] = useState<CursorTypes>(
    CursorEnums.default
  );

  const toggleCursorState = useCallback(
    (state: CursorTypes) => {
      setCursorState(state);
    },
    []
  );

  return (
    <CursorContext.Provider value={{ cursorState, toggleCursorState }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
