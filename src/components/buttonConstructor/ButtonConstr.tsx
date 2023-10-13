import { FC } from "react";
import { IButtonConstructorOptions } from "./buttonConstr.interface";
import { ButtonComponent, IconComponent } from "..";

const ButtonConstr: FC<IButtonConstructorOptions> = ({ options }) =>
  options?.map(
    (
      {
        buttonTitle,
        className,
        styles,
        isButtonDisabled,
        icon,
        event,
        textContent,
      },
      index
    ) => {
      return (
        <ButtonComponent
          key={index}
          buttonTitle={buttonTitle}
          className={className}
          styles={styles}
          onClickEvent={event}
          isButtonDisabled={isButtonDisabled}
        >
          {icon ? (
            <IconComponent
              nameIcon={icon.name}
              size={icon.size}
            />
          ) : (
            textContent
          )}
        </ButtonComponent>
      );
    }
  );

export default ButtonConstr;
