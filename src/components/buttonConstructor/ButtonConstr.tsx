import { FC } from "react";
import { IButtonConstructorOptions } from "./buttonConstr.interface";
import { ButtonComponent, IconComponent } from "..";

const ButtonConstr: FC<IButtonConstructorOptions> = ({ options }) =>
  options?.map(
    (
      {
        buttonTitle,
        buttonCustomStyles,
        buttonNewStyles,
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
          buttonCustomStyles={buttonCustomStyles}
          buttonNewStyles={buttonNewStyles}
          onClickEvent={event}
          isButtonDisabled={isButtonDisabled}
        >
          {icon ? (
            <IconComponent
              nameIcon={icon.name}
              propsIcon={{ size: icon.size }}
            />
          ) : (
            textContent
          )}
        </ButtonComponent>
      );
    }
  );

export default ButtonConstr;
