import { FC } from "react";
import s from "./Hero.module.css";
import { LocalTimeComponent } from "@/components";

const Hero: FC = () => {
  
  return (
    <section className={s.section}>
      <div className="custom-c">
        <div className={s.container}>
          <h1 className={s.title}>
            Hello, I’m <span className="text-accent">Martin Li</span>, Web
            Developer and
            <span className={s.decoration}>UX / UI Designer</span>
            Based in Lithuania.
          </h1>
        </div>
        <LocalTimeComponent />
      </div>
    </section>
  );
};

export default Hero;
