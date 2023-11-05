import Link from "next/link";
import { FC } from "react";
import s from "./Portfolio.module.css";
import { ImageLoaderComponent, SectionTemplComponent } from "@/components";
import { IPortfolioPreview } from "@/interfaces";

const Portfolio: FC<{ options: IPortfolioPreview[] }> = ({ options }) => {
  return (
    <SectionTemplComponent title="Portfolio" className={s.section}>
      <ul className={s.list}>
        {options?.map(
          (
            {
              casePath,
              casePreviewTitle,
              casePreviewDesc,
              caseTags,
              title,
              casePreviewImage,
            },
            index
          ) => {
            return (
              <li key={index} className={s.sentence}>
                <Link href={`/portfolio/${casePath}`}>
                  <div className={s.content}>
                    <span className={s.overlay}>
                      <span className="desc block mb-4">Click to see..</span>
                      <span className="4sm:w-4/5 xl:w-[90%] block">
                        <p className={s.suptitle}>{casePreviewTitle}</p>
                        <p className={s.description}>{casePreviewDesc}</p>
                      </span>
                    </span>
                    <ImageLoaderComponent
                      src={casePreviewImage}
                      alt={""}
                      isFiil={true}
                      className={s.image}
                    />
                  </div>
                  <h4 className={s.tagtext}>{title}</h4>
                  <ul className={s.taglist}>
                    {caseTags?.map((item, index) => (
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
    </SectionTemplComponent>
  );
};

export default Portfolio;
