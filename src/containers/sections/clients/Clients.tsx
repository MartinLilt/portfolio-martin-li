import { FC } from "react";
import s from "./Clients.module.css";
import Image from "next/image";
import circle from "@/assets/icons/circle.svg";

const Clients: FC = () => {
  return (
    <section className={s.section}>
      <div className="custom-c relative">
        <h3 className={s.partner}>Partners</h3>
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
                  <Image
                    src={url}
                    alt={alt}
                    draggable={false}
                    width={80}
                    height={24}
                    className={s.image}
                  />
                </li>
              );
            })}
          </ul>
          <div className={s.container}>
            <span className={s.guarantees}>
              My guarantees:
            </span>
            <h4 className={s.text}>
              <span className={s.decoration}>Over 90%</span> of all my{" "}
              <span className="text-accent">contracts</span> are long-term.
            </h4>
            <Image
            src={circle}
            alt="Decoration circle"
            className={s.circle}
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
