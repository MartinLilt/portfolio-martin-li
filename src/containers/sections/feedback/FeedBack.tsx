import { FC } from "react";
import s from "./FeedBack.module.css";
import {
  ButtonComponent,
  FormComponent,
  IconComponent,
  SectionTemplComponent,
  SocialListComponent,
} from "@/components";
import { ISocialMediaPreview } from "@/interfaces";

const FeedBack: FC<{ options: ISocialMediaPreview[] }> = ({ options }) => {
  const handleSendEmail = () => {};

  return (
    <SectionTemplComponent sectionId="feedback" title="FeedBack">
      <div className="xl:center xl:!items-start pb-24">
        <div className="xl:w-x1/2">
          <ButtonComponent
            onClickEvent={handleSendEmail}
            buttonTitle={""}
            className={s.button}
          >
            <span className={s.action}>Get in touch</span>
            <IconComponent nameIcon={"MdOutgoingMail"} />
          </ButtonComponent>
          <div className="max-w-[340px] md:max-w-[600px]">
            <p className={s.text}>Let&rsquo;s make your brand brilliant!</p>
            <p className={s.desc}>
              If you would like to work with us or just want to get in touch,
              we&rsquo;d love to hear from you!
            </p>
          </div>
          <SocialListComponent options={options} />
        </div>
        <div className="xl:w-x1/2 mt-12 xl:mt-0">
          <span className={s.call}>Feedback form:</span>
          <FormComponent />
        </div>
      </div>
    </SectionTemplComponent>
  );
};

export default FeedBack;
