import { FC } from "react";
import s from "./About.module.css";
import { SectionTemplComponent } from "@/components";

const About: FC = () => {
  return (
    <SectionTemplComponent
      sectionId="about"
      title="About me"
      containerCSS={s.container}
    >
      <p className={s.desc}>
        Hi 👋, I cooperate with Digital Agencies on a regular basis. I am mainly
        engaged in UI development for websites with B2B and B2C business
        approaches.
      </p>
    </SectionTemplComponent>
  );
};

export default About;
