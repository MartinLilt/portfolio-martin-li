import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Portfolio.module.css";

const Portfolio: FC = () => {
  return (
    <section className={s.section}>
      <div className="custom-c">
        <h3 className={s.tile}>Portfolio</h3>
        <ul className={s.list}>
          {[
            {
              title: "GeekFolio Portfolio",
              tags: ["B2B", "Next.js", "Tailwind", "Sanity.io"],
              casePath: "/portfolio/geekfolio-portfolio",
              img: { url: "/1.jpg", alt: "GeekFolio Portfolio showcase" },
              overlay: {
                suptitle: "Website fot the Digital Agency (B2B)",
                desc: `I am mainly engaged in UI development for websites 
                with B2B and B2C business approaches.`,
              },
            },
            {
              title: "Luxury Modern Website",
              tags: ["B2B", "Next.js", "Tailwind", "Sanity.io"],
              casePath: "/portfolio/luxury-modern-ebsite",
              img: { url: "/2.jpg", alt: "Luxury Modern Website showcase" },
              overlay: {
                suptitle: "Website fot the Digital Agency (B2B)",
                desc: `I am mainly engaged in UI development for websites 
                with B2B and B2C business approaches.`,
              },
            },
            {
              title: "Brand Identity",
              tags: ["B2B", "Next.js", "Tailwind", "Sanity.io"],
              casePath: "/portfolio/brand-identity",
              img: { url: "/3.jpg", alt: "Brand Identity showcase" },
              overlay: {
                suptitle: "Website fot the Digital Agency (B2B)",
                desc: `I am mainly engaged in UI development for websites 
                with B2B and B2C business approaches.`,
              },
            },
            {
              title: "Brand Identity",
              tags: ["B2B", "Next.js", "Tailwind", "Sanity.io"],
              casePath: "/portfolio/brand-identity",
              img: { url: "/3.jpg", alt: "Brand Identity showcase" },
              overlay: {
                suptitle: "Website fot the Digital Agency (B2B)",
                desc: `I am mainly engaged in UI development for websites 
                with B2B and B2C business approaches.`,
              },
            },
          ].map(
            (
              {
                title,
                tags,
                casePath,
                img: { url, alt },
                overlay: { suptitle, desc },
              },
              index
            ) => {
              return (
                <li key={index} className={s.sentence}>
                  <Link href={casePath}>
                    <div className={s.content}>
                      <span className={s.overlay}>
                        <span className="desc block mb-4">
                          Click to see..
                        </span>
                        <span className="4sm:w-4/5 xl:w-[90%] block">
                          <p className={s.suptitle}>{suptitle}</p>
                          <p className={s.description}>{desc}</p>
                        </span>
                      </span>
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
                    <h4 className={s.tagtext}>{title}</h4>
                    <ul className={s.taglist}>
                      {tags?.map((item, index) => (
                        <li key={index} className={s.tagsentence}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
