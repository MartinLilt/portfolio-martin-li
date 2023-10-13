import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import s from "./Form.module.css";
import { feedBackFormSchema } from "./form.schema";
import { IFormData } from "./form.interface";
import axios from "axios";
import { useModal } from "@/hooks";
import { ModalEnums } from "@/providers";
import { ButtonComponent } from "..";

type FormData = z.infer<typeof feedBackFormSchema>;

const Form: FC = () => {
  const { toggleModal } = useModal();
  const { toastModalSuccess, toastModalError } = ModalEnums;

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(feedBackFormSchema),
  });

  const initialDescHeight = 108;
  const reqNumberOfCharacters = 80;
  const { name, subject, mail, desc } = errors;
  const descLength = watch("desc")?.length || 17;
  const isHeightLength =
    descLength >= reqNumberOfCharacters
      ? initialDescHeight + descLength / 2
      : initialDescHeight;
  const defaultDescription = `Hi! Martin! I'm..`;

  const onSubmit = async (data: IFormData) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}`, data);
      if (response) {
        toggleModal(toastModalSuccess);
        reset({ name: "", subject: "", mail: "", desc: defaultDescription });
      }
    } catch (e) {
      toggleModal(toastModalError);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.name}>
        <input
          className={`${s.field} ${name && s.error}`}
          type="text"
          placeholder="Your name.."
          autoComplete="off"
          {...register("name", { required: true })}
        />
        <label className={s.label}>{name?.message}</label>
      </div>
      <div className={s.subject}>
        <input
          className={`${s.field} ${subject && s.error}`}
          type="text"
          placeholder="Your subject.."
          autoComplete="off"
          {...register("subject", { required: true })}
        />
        <label className={s.label}>{subject?.message}</label>
      </div>
      <div className={s.mail}>
        <input
          className={`${s.field} ${mail && s.error}`}
          type="mail"
          placeholder="Your email.."
          autoComplete="off"
          {...register("mail", { required: true })}
        />
        <label className={s.label}>{mail?.message}</label>
      </div>
      <div className={s.description}>
        <textarea
          className={`${s.field} ${desc && s.error}`}
          placeholder="Your description.."
          autoComplete="off"
          defaultValue={defaultDescription}
          style={{ height: isHeightLength }}
          {...register("desc", { required: true })}
        />
        <label className={s.label}>{desc?.message}</label>
      </div>
      <span className={s.symbols}>{`Symbols: (${descLength}/250)`}</span>
      <span>
        <ButtonComponent
          buttonTitle={"Click to submit form.."}
          className={s.submit}
          buttonType="submit"
        >
          Submit
        </ButtonComponent>
      </span>
    </form>
  );
};

export default Form;
