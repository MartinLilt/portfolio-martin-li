import Link from "next/link";
import { FC } from "react";
import s from './Service.module.css'

const Services: FC = () => {
  return (
    <section data-anchor-services className={s.section}>
      <div className="custom-c">
        <h3
          className={s.title}
        >
          Services
        </h3>
        <ul className={s.list}>
          {[
            {
              preview: "B2B",
              title: "Web product development",
              desc: "Website development for you bisness to bisnee approach.",
              tags: ["Web design", "Web development", "CMS system"],
              isPopular: false,
              productUrl: '/service/business-to-business',
            },
            {
              preview: "B2C",
              title: "Web product development",
              desc: "Website development for you bisness to bisnee approach.",
              tags: ["Web design", "Web development", "CMS system"],
              isPopular: false,
              productUrl: '/service/business-to-client',
            },
            {
              preview: "DEV",
              title: "Web product development",
              desc: "Website development for you bisness to bisnee approach.",
              tags: ["Web design", "Web development", "CMS system"],
              isPopular: true,
              productUrl: '/service/custom-development',
            },
          ].map(({ preview, title, desc, tags, isPopular, productUrl }, index) => {
            return (
              <li
                key={index}
                title={`Click to open "${title}" case..`}
                className={s.sentence}
              >
                <Link href={productUrl} className={s.link}>
                  <span className={s.product}>Product name:</span>
                  <span
                    className={s.preview}
                    style={{ marginBottom: isPopular ? "1.5rem" : "3.5rem" }}
                  >
                    {preview}
                  </span>
                  {isPopular && (
                    <span
                      className={s.popular}
                    >
                      Popular product*
                    </span>
                  )}
                  <h4 className={s.text}>
                    {title}
                  </h4>
                  <p className={s.desc}>{desc}</p>
                  <ul className={s.taglist}>
                    {tags?.map((item, index) => {
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
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
