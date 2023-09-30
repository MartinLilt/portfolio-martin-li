import { FC } from "react";
import s from "./FeedBack.module.css";
import { useForm, SubmitHandler } from "react-hook-form";


const FeedBack: FC = () => {
  return (
    <section>
      <div className="custom-c">
        <h3 className={s.title}>FeedBack</h3>
      </div>
    </section>
  );
};

export default FeedBack;
