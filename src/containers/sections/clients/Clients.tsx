import { FC } from "react";
import s from "./Clients.module.css";
import Image from "next/image";
import circle from "@/assets/icons/circle.svg";

const Clients: FC = () => {
  return (
    <section className="pb-40">
      <div className="custom-c relative">
        <h3 className={s.title}>Partnerships</h3>
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
                    width={100}
                    height={24}
                    className={s.image}
                  />
                </li>
              );
            })}
          </ul>
          <div className="lg:w-4/5 xl:w-2/3">
            <span className="block font-light mb-8 text-primary">
              My guarantees:
            </span>
            <h4 className={s.text}>
              <span className={s.decoration}>Over 90%</span> of all my{" "}
              <span className="text-accent">contracts</span> are long-term.
            </h4>
            <Image
            src={circle}
            alt="Decoration circle"
            className="hidden xl:block absolute 
            top-[10rem] right-0 opacity-[15%] w-[50%]"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
