import { FC } from "react";
import { IButtin } from "./button.interface";

const Button: FC<IButtin> = ({
  children,
  buttonType = "button",
  buttonTitle,
  className = "btn",
  styles,
  isButtonDisabled,
  onClickEvent,
}) => {
  const isVisible = isButtonDisabled ? "!hidden" : "!visible";
  return (
    <button
      title={buttonTitle}
      className={`${className} ${isVisible}`}
      type={buttonType}
      onClick={onClickEvent}
      disabled={isButtonDisabled}
      style={styles}
    >
      {children}
    </button>
  );
};

export default Button;
