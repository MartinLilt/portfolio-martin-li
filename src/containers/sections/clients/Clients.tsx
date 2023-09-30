import { FC } from "react";
import s from "./Clients.module.css";
import Image from "next/image";

const Clients: FC = () => {
  return (
    <section className="pb-40">
      <div className="custom-c">
        <h3 className={s.title}>Partnerships</h3>
        <ul>
          {[
            { img: { url: "/01.png", alt: "Logo" } },
            { img: { url: "/02.png", alt: "Logo" } },
            { img: { url: "/01.png", alt: "Logo" } },
            { img: { url: "/02.png", alt: "Logo" } },
            { img: { url: "/01.png", alt: "Logo" } },
            { img: { url: "/02.png", alt: "Logo" } },
          ].map(({ img: { url, alt } }, index) => {
            return (
              <li key={index}>
                <Image
                  src={url}
                  alt={alt}
                  draggable={false}
                  width={100}
                  height={20}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
