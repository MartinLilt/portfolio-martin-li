import { FC } from "react";
import s from "./Clients.module.css";
import circle from "@/assets/icons/circle.svg";
import { ImageLoaderComponent, SectionTemplComponent } from "@/components";
import { ICustomerLogoPreview } from "@/interfaces";

const Clients: FC<{ options: ICustomerLogoPreview[] }> = ({ options }) => {
  
  return (
    <SectionTemplComponent
      title="Partners"
      className={s.section}
      containerCSS="relative"
    >
      <div>
        <ul className={s.list}>
          {options?.map(
            ({ customerAlert, customerLink, customerLogo }, index) => {
              return (
                <li key={index} className={s.sentence}>
                  <a
                    href={customerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-wrap"
                  >
                    <ImageLoaderComponent
                      src={customerLogo}
                      alt={customerAlert}
                      sizes={80}
                      className={s.image}
                      isFiil={false}
                    />
                  </a>
                </li>
              );
            }
          )}
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
