import React, { forwardRef } from "react";
import s from "./FormInput.module.css";
import { Controller } from "react-hook-form";
import { IFormGroupProps, IInputElementProps } from "./formInput.interface";

const FormInput = forwardRef<HTMLInputElement, IFormGroupProps>(
  ({ label, name, control, defaultValue, renderTag }, ref) => {
    const CurrentTag = renderTag || "input";
    return (
      <div className={s.content}>
        <label htmlFor={label}></label>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <CurrentTag
              {...field}
              ref={ref}
              placeholder={name}
              {...({} as IInputElementProps)}
            />
          )}
        />
      </div>
    );
  }
);

export default FormInput;
