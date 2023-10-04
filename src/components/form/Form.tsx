import { FC } from "react";
import s from "./Form.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonComponent, FormInputComponent } from "..";
import { IFormData } from "./form.interface";

const Form: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.content}>
      {[
        { name: "name", label: "Name", renderTag: "input" },
        { name: "email", label: "Email", renderTag: "input" },
        { name: "subject", label: "Subject", renderTag: "input" },
        { name: "description", label: "Description", renderTag: "textarea" },
      ].map(({ name, label, renderTag }, index) => {
        return (
          <FormInputComponent
            key={index}
            name={name}
            label={label}
            control={control}
            renderTag={renderTag}
          />
        );
      })}

      <ButtonComponent buttonTitle={""} buttonType="submit">
        Submit
      </ButtonComponent>
    </form>
  );
};

export default Form;

