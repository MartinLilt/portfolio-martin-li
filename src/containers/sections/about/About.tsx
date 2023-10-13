import { FC } from "react";
import s from './About.module.css'

const About: FC = () => {
  return (
    <section>
      <div id="about" className="-translate-y-12" />
      <div className={`custom-c ${s.container}`}>
        <div className={s.content}>
          <h2 className={s.title}>About me</h2>
          <p className={s.desc}>
            Hi 👋, I cooperate with Digital Agencies on a regular basis. I am
            mainly engaged in UI development for websites with B2B and B2C
            business approaches.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
