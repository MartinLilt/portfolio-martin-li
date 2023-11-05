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
        Hello, I am a web developer and designer with expertise in catering to
        the needs of digital agencies. My focus primarily revolves around
        servicing both B2B and B2C enterprises on a consistent basis.
      </p>
    </SectionTemplComponent>
  );
};

export default About;
