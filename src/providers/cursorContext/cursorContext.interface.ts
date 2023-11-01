import { CursorEnums } from "./cursorContext.enum";

export type CursorTypes = CursorEnums;

export interface ICursorContextType {
  cursorState: CursorTypes;
  toggleCursorState: (state: CursorTypes) => void;
}
