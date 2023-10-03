import { FC } from "react";
import s from './FeedBack.module.css';
import { ButtonComponent, FormComponent, IconComponent } from "@/components";

const FeedBack: FC = () => {
  const handleSendEmail = () => {};

  return (
    <section id="feedback">
      <div className="custom-c">
        <h3 className={s.title}>FeedBack</h3>
        <div className="xl:flex xl:justify-between">
          <div className="xl:w-x1/2">
            <ButtonComponent onClickEvent={handleSendEmail} buttonTitle={""}>
              <span className={s.action}>Get in touch</span>
              <IconComponent
                nameIcon={"MdOutgoingMail"}
                propsIcon={{ size: 25 }}
              />
            </ButtonComponent>
            <div className="max-w-[340px] md:max-w-[600px]">
              <p className={s.text}>Let&rsquo;s make your brand brilliant!</p>
              <p className={s.desc}>
                If you would like to work with us or just want to get in touch,
                we&rsquo;d love to hear from you!
              </p>
            </div>
            <ul className={s.list}>
              {[
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
              ].map(({ link: { href, alt }, icon }, index) => {
                return (
                  <li key={index} className={s.sentence}>
                    <a
                      href={href}
                      title={`Click to open my ${alt}..`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s.link}
                    >
                      <IconComponent nameIcon={icon} propsIcon={{ size: 25 }} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="xl:w-x1/2">
            <span className={s.call}>Feedback form:</span>
            <FormComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
