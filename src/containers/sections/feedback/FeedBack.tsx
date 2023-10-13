import { FC } from "react";
import s from "./FeedBack.module.css";
import {
  ButtonComponent,
  FormComponent,
  IconComponent,
  SocialListComponent,
} from "@/components";

const FeedBack: FC = () => {
  const handleSendEmail = () => {};

  return (
    <section>
      <div id="feedback" className="-translate-y-12" />
      <div className="custom-c">
        <h3 className={s.feed}>FeedBack</h3>
        <div className="xl:center xl:!items-start pb-24">
          <div className="xl:w-x1/2">
            <ButtonComponent onClickEvent={handleSendEmail} buttonTitle={""} className={s.button}>
              <span className={s.action}>Get in touch</span>
              <IconComponent
                nameIcon={"MdOutgoingMail"}
              />
            </ButtonComponent>
            <div className="max-w-[340px] md:max-w-[600px]">
              <p className={s.text}>Let&rsquo;s make your brand brilliant!</p>
              <p className={s.desc}>
                If you would like to work with us or just want to get in touch,
                we&rsquo;d love to hear from you!
              </p>
            </div>
            <SocialListComponent
              options={[
                {
                  link: {
                    href: "https://www.linkedin.com/in/martin-liminovic-44046b21a/",
                    alt: "linkedin",
                  },
                  icon: "RiLinkedinFill",
                },
                {
                  link: { href: "https://t.me/limi_amm", alt: "telegram" },
                  icon: "FaTelegram",
                },
                {
                  link: { href: "https://wa.me/37065866504", alt: "whatsapp" },
                  icon: "RiWhatsappFill",
                },
                {
                  link: {
                    href: "https://github.com/MartinLilt",
                    alt: "github",
                  },
                  icon: "BiLogoGithub",
                },
                {
                  link: {
                    href: "https://www.upwork.com/freelancers/~013353693d309695d7",
                    alt: "upwork",
                  },
                  icon: "BiLogoUpwork",
                },
                {
                  link: {
                    href: "https://www.fiverr.com/martinliminovic?up_rollout=true",
                    alt: "fiverr",
                  },
                  icon: "TbBrandFiverr",
                },
              ]}
            />
          </div>
          <div className="xl:w-x1/2 mt-12 xl:mt-0">
            <span className={s.call}>Feedback form:</span>
            <FormComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
