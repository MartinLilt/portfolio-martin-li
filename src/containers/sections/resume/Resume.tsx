import { SectionTemplComponent } from "@/components";
import { FC, useState } from "react";
import s from "./Resume.module.css";
import { IResumePreview } from "@/interfaces";
import { useSortByDate } from "@/hooks";
import { textCutter } from "@/helpers";

const Resume: FC<{ options: IResumePreview[] }> = ({ options }) => {
  const sortedOptions = useSortByDate(options)[0] as IResumePreview[];
  const [selectedDescription, setSelectedDescription] = useState<number | null>(
    null
  );

  return (
    <SectionTemplComponent title="Resume" className={s.section}>
      <ul className={s.list}>
        {sortedOptions?.map(
          (
            {
              title,
              contract: { contractLocation, contractType },
              date: { startDate, endDate },
              company,
              location,
              description,
            },
            index
          ) => {
            const isMoreDescription = textCutter(description, 100);
            const isDescriptionSelected = selectedDescription === index;
            const shortDescription = isMoreDescription
              ? isMoreDescription.previewText
              : description;
            const remainingDescription = isMoreDescription
              ? isMoreDescription.moreText
              : "";

            return (
              <li key={index} className={s.sentence}>
                <div className="relative">
                  <span className={s.date}>{`${startDate} - ${endDate}`}</span>
                  <p className={s.name}>{title}</p>
                </div>
                <h4 className={s.supptitle}>
                  <span className={s.description}>
                    {shortDescription}
                    {isDescriptionSelected ? " " : ".."}
                    {isDescriptionSelected && remainingDescription}
                    {!isDescriptionSelected && remainingDescription && (
                      <button
                        type="button"
                        className="block"
                        onClick={() => setSelectedDescription(index)}
                      >
                        Show More..
                      </button>
                    )}
                  </span>
                </h4>
                <ul className="flex flex-wrap translate-x-[-0.25rem]">
                  {Array(
                    contractLocation,
                    contractType,
                    company,
                    location
                  )?.map((item, index) => (
                    <li key={index} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
        )}
      </ul>
    </SectionTemplComponent>
  );
};

export default Resume;
