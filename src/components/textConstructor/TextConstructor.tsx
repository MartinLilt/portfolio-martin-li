import { FC, createElement } from "react";
import { ITextConstructor } from "./textConstructor.interface";

const TextConstructor: FC<ITextConstructor> = ({
  tag,
  textLength,
  children,
  textClassName,
}) => {
  return createElement(
    tag || "p",
    { className: textClassName },
    children.length <= textLength
      ? children
      : children.slice(0, textLength) + "..."
  );
};

export default TextConstructor;
