import { IconComponent } from "@/components";
import { FC } from "react";
import s from './Skills.module.css'

const Skills: FC = () => {
  return (
    <section className={s.section}>
      <div className="custom-c">
        <h3
          className={s.title}
        >
          Skills
        </h3>
        <ul className={s.list}>
          {[
            {
              title: "Front-end Dev.",
              icon: { name: "DiJavascript", alt: "Front-end icon" },
              progress: 87,
              descTags: [
                "JavaScript",
                "TypeScript",
                "React.js",
                "Vue.js",
                "Next.js",
                "Nuxt.js",
                "Gatsby.js",
                "Redux.js",
              ],
            },
            {
              title: "Back-end Dev.",
              icon: { name: "FaNodeJs", alt: "Back-end icon" },
              progress: 75,
              descTags: [
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Express.js",
                "REST API",
                "Websockets",
                "PHP",
                "Symfony",
              ],
            },
            {
              title: "DevOps Skills",
              icon: { name: "SiDocker", alt: "DevOps icon" },
              progress: 65,
              descTags: [
                "Docker",
                "CI / CD",
                "Git-actions",
                "Jenkins",
                "Jest tests",
                "E2E",
                "Unit tests",
              ],
            },
            {
              title: "UX/UI Design",
              icon: { name: "CgFigma", alt: "Web design icon" },
              progress: 60,
              descTags: [
                "Web design",
                "UI kits",
                "UX Prototyping",
                "Responsive design",
                "Figma",
                "Photoshop",
                "Adobe Effect",
              ],
            },
          ].map(({ title, icon: { name, alt }, progress, descTags }, index) => {
            return (
              <li key={index} title={alt} className={s.sentence}>
                <p className={s.experience}>Experience level:</p>
                <div className="text-primary">
                  <span className={s.content}>
                      <span className={s.progressbar} style={{ width: `${progress}%` }}></span>
                    <IconComponent nameIcon={name} propsIcon={{ size: 40 }} />
                    <span className={s.progress}>{`${progress} %`}</span>
                  </span>
                  <p className={s.text}>
                    {title}
                  </p>
                </div>
                <ul
                  className={s.taglist}
                >
                  {descTags?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={s.tagsentence}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
