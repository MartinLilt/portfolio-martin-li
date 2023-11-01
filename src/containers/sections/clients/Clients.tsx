import { FC } from "react";
import s from "./Clients.module.css";
import circle from "@/assets/icons/circle.svg";
import { ImageLoaderComponent, SectionTemplComponent } from "@/components";

const Clients: FC = () => {
  return (
    <SectionTemplComponent
      title="Partners"
      className={s.section}
      containerCSS="relative"
    >
      <div>
        <ul className={s.list}>
          {[
            { img: { url: "/01.png", alt: "Logo" } },
            { img: { url: "/02.png", alt: "Logo" } },
            { img: { url: "/01.png", alt: "Logo" } },
            { img: { url: "/02.png", alt: "Logo" } },
            { img: { url: "/01.png", alt: "Logo" } },
          ].map(({ img: { url, alt } }, index) => {
            return (
              <li key={index} className={s.sentence}>
                <ImageLoaderComponent
                  src={url}
                  alt={alt}
                  sizes={80}
                  className={s.image}
                  isFiil={false}
                />
              </li>
            );
          })}
        </ul>
        <div className={s.box}>
          <span className={s.guarantees}>My guarantees:</span>
          <h4 className={s.text}>
            <span className={s.decoration}>Over 90%</span> of all my{" "}
            <span className="text-accent">contracts</span> are long-term.
          </h4>
          <ImageLoaderComponent
            src={circle}
            alt="Decoration circle"
            className={s.circle}
            isFiil={false}
          />
        </div>
      </div>
    </SectionTemplComponent>
  );
};

export default Clients;


