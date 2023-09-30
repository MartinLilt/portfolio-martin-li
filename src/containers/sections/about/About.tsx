import { FC } from "react";
import s from './About.module.css'

const About: FC = () => {
  return (
    <section data-anchor-about >
      <div className={`custom-c ${s.container}`}>
        <div className={s.content}>
          <h2 className={s.title}>About me</h2>
          <p className={s.text}>
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
