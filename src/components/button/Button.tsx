import { FC } from "react";
import s from "./Button.module.css";
import { IButtin } from "./button.interface";
import cn from 'classnames'

const Button: FC<IButtin> = ({
  children,
  buttonType = "button",
  buttonTitle,
  buttonCustomStyles,
  buttonNewStyles = s.default,
  isButtonDisabled,
  onClickEvent,
}) => {

  return (
    <button
      title={buttonTitle}
      className={`${buttonNewStyles} ${buttonCustomStyles}`}
      type={buttonType}
      onClick={onClickEvent}
      disabled={isButtonDisabled}
      style={{ display: isButtonDisabled ? 'none' : 'block'}}
    >
      {children}
    </button>
  );
};

export default Button;
