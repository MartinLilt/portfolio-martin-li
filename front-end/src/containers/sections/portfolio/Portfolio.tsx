import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from './Portfolio.module.css'

const Portfolio: FC = () => {
  return (
    <section className={s.section}>
      <div className="custom-c">
        <h3
          className={s.title}
        >
          Portfolio
        </h3>
        <ul className={s.list}>
          {[
            {
              title: "GeekFolio Portfolio",
              tags: ["B2B", "Next.js", "Tailwind", "Sanity.io"],
              casePath: "/portfolio/geekfolio-portfolio",
              img: { url: "/1.jpg", alt: "GeekFolio Portfolio showcase" },
            },
            {
              title: "Luxury Modern Website",
              tags: ["B2B", "Next.js", "Tailwind", "Sanity.io"],
              casePath: "/portfolio/luxury-modern-ebsite",
              img: { url: "/2.jpg", alt: "Luxury Modern Website showcase" },
            },
            {
              title: "Brand Identity",
              tags: ["B2B", "Next.js", "Tailwind", "Sanity.io"],
              casePath: "/portfolio/brand-identity",
              img: { url: "/3.jpg", alt: "Brand Identity showcase" },
            },
            {
              title: "Brand Identity",
              tags: ["B2B", "Next.js", "Tailwind", "Sanity.io"],
              casePath: "/portfolio/brand-identity",
              img: { url: "/3.jpg", alt: "Brand Identity showcase" },
            },
          ].map(({ title, tags, casePath, img: { url, alt } }, index) => {
            return (
              <li key={index} className={s.sentence}>
                <Link href={casePath}>
                  <div
                    className={s.content}
                  >
                    <Image
                      src={url}
                      alt={alt}
                      loading="lazy"
                      sizes="500px"
                      draggable={false}
                      fill
                      className={s.image}
                    />
                  </div>
                  <h4 className={s.text}>{title}</h4>
                  <ul className={s.taglist}>
                    {tags?.map((item, index) => (
                      <li key={index} className={s.tagsentence}>{item}</li>
                    ))}
                  </ul>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
