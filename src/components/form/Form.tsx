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
      <FormInputComponent name="name" label="name" control={control} />
      <FormInputComponent name="email" label="email" control={control} />
      <FormInputComponent name="subject" label="subject" control={control} />
      <FormInputComponent
        name="description"
        label="description"
        control={control}
        renderTag="textarea"
      />
      <ButtonComponent buttonTitle={""} buttonType="submit">
        Submit
      </ButtonComponent>
    </form>
  );
};

export default Form;
