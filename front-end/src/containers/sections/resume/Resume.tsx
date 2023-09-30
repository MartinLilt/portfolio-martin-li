import { IconComponent } from "@/components";
import { FC } from "react";
import s from './Resume.module.css'

const Resume: FC = () => {
  return (
    <section className={s.section}>
      <div className="custom-c">
        <h3
          className={s.title}
        >
          Resume
        </h3>
        <ul className={s.list}>
          {[
            {
              date: { start: "aug 2022", end: "sep 2023" },
              title: "Upwork",
              desc: "Fullstack Developer | Long-term Partnership React Expert",
              logo: "SiUpwork",
            },
            {
                date: { start: "jun 2020", end: "sep 2021" },
                title: "BotHelp Agency",
                desc: "Messenger Marketing Specialist | Digital Marketing Strategy Development",
                logo: "LuMessagesSquare",
              },
            {
              date: { start: "jan 2019", end: "feb 2020" },
              title: "Fiverr.",
              desc: "UX / UI Web Designer | User Interface Kits Creator",
              logo: "TbBrandFiverr",
            },
          ].map(({ date, title, desc, logo }, index) => {
            return (
              <li key={index} className={s.sentence}>
                <div className="relative">
                  <span
                    className={s.date}
                  >
                    {`${date.start} - ${date.end}`}
                  </span>
                  <p className={s.text}>
                    {title}
                  </p>
                  <span className={s.icon}>
                    <IconComponent nameIcon={logo} propsIcon={{ size: 40 }} />
                  </span>
                </div>
                <h4
                  className={s.supptitle}
                >
                  <span className={s.desc}>{desc}</span>
                </h4>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
