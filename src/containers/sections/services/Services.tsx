import { FC } from "react";
import s from "./Service.module.css";
import Link from "next/link";
import { Object3DTemplComponent, SectionTemplComponent } from "@/components";
import { IServicesPreview } from "@/interfaces";

const Service: FC<{ options: IServicesPreview[] }> = ({ options }) => {
  return (
    <SectionTemplComponent
      title="Service"
      className="pb-40"
      sectionId="service"
    >
      <ul className={s.list}>
        {options?.map(
          (
            { title, tags, description, link: { alert, href }, object3DFile },
            index
          ) => {
            return (
              <li
                key={index}
                title={`Click to open ${alert} case..`}
                className={s.sentence}
              >
                <Link href={href} className={s.link}>
                  <div className={s.canvas}>
                    <Object3DTemplComponent />
                  </div>
                  <div className={s.content}>
                    <span className={s.case}>{`Service case (${
                      index + 1
                    }/3)`}</span>
                    <div className={s.box}>
                      <h4 className={s.name}>{title}</h4>
                      <p className={s.description}>{description}</p>
                    </div>
                    <ul className={s.taglist}>
                      {tags?.map((item, index) => (
                        <li key={index} className={s.tagsentence}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
                <ul className={s.tablist}>
                  {tags?.map((item, index) => (
                    <li key={index} className={s.tagsentence}>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
        )}
      </ul>
    </SectionTemplComponent>
  );
};

export default Service;
