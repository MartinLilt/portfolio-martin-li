import { FC } from "react";
import s from "./ModalTempl.module.css";
import { useModal } from "@/hooks";
import { ModalEnums } from "@/providers";

const ModalToast: FC = () => {
  const { isModalOpen, toggleModal } = useModal();
  const { toastModalError, toastModalSuccess } = ModalEnums;
  const isToastSuccess = isModalOpen === toastModalSuccess;
  const isToastError = isModalOpen === toastModalError;

  return (
    <div onClick={() => toggleModal(null)}
      className={s.toast}
      style={{
        display: isToastSuccess || isToastError ? "block" : "none",
      }}
    >
      <div className={s.action}>
        {isToastSuccess && (
          <>
            <p className={s.success}>Success!</p>
            <p className={s["s-text"]}>
              Great! Your action was successfully completed!
            </p>
          </>
        )}
        {isToastError && (
          <>
            <p className={s.error}>Error..</p>
            <p className={s["e-text"]}>
              Oops! Something is wrong. Repeate your target action again..
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalToast;
