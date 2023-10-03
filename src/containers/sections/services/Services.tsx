import { FC } from "react";
import s from "./Service.module.css";
import Link from "next/link";
import { SectionTemplComponent } from "@/components";

const Service: FC = () => {
  return (
    <SectionTemplComponent title="Service" styles="pb-40" sectionId="service">
      <ul className={s.list}>
        {[
          {
            title: "What is Business to Business?",
            link: {
              href: "/service/business-to-business",
              alt: "b2b service",
            },
            desc: "Modern and mobile-ready website that will help you reach all of your marketing.",
            taglist: ["b2b", "UX / UI design", "web development"],
          },
          {
            title: "What is Business to Client?",
            link: {
              href: "/service/business-to-client",
              alt: "b2c service",
            },
            desc: "Modern and mobile-ready website that will help you reach all of your marketing.",
            taglist: ["b2c", "UX / UI design", "web development"],
          },
          {
            title: "What is Mobile to Client?",
            link: {
              href: "/service/mobile-development",
              alt: "mobile development service",
            },
            desc: "Modern and mobile-ready website that will help you reach all of your marketing.",
            taglist: ["mobile", "UX / UI design", "web development"],
          },
        ].map(({ title, link: { href, alt }, desc, taglist }, index) => {
          return (
            <li
              key={index}
              title={`Click to open ${alt} case..`}
              className={s.sentence}
            >
              <Link href={href} className={s.link}>
                <div className={s.canvas}></div>
                <div className={s.content}>
                  <span className={s.case}>{`Service case (${
                    index + 1
                  }/3)`}</span>
                  <div className={s.box}>
                    <h4 className={s.text}>{title}</h4>
                    <p className={s.desc}>{desc}</p>
                  </div>
                  <ul className={s.taglist}>
                    {taglist?.map((item, index) => (
                      <li key={index} className={s.tagsentence}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
              <ul className={s.tablist}>
                {taglist?.map((item, index) => (
                  <li key={index} className={s.tagsentence}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </SectionTemplComponent>
  );
};

export default Service;
