import { FC } from "react";
import s from "./Button.module.css";
import { IButtin } from "./button.interface";

const Button: FC<IButtin> = ({
  children,
  buttonType = "button",
  buttonTitle,
  buttonCustomStyles,
  onClickEvent,
}) => {
  return (
    <button
      title={buttonTitle}
      className={s.default}
      style={buttonCustomStyles}
      type={buttonType}
      onClick={onClickEvent}
    >
      {children}
    </button>
  );
};

export default Button;
