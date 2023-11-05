import { ImageLoaderComponent, SectionTemplComponent } from "@/components";
import { IPostOptions } from "@/interfaces";
import { FC } from "react";

const Case: FC<{ options: IPostOptions }> = ({ options }) => {
  const {
    title,
    caseTags,
    caseContent,
    caseDate,
    caseRate,
    caseComment,
    casePreviewImage,
    caseImages,
  } = options;

  console.log(casePreviewImage);
  return (
    <SectionTemplComponent>
      <ul>
        {caseTags?.map((item, index) => (
          <li key={index} className="tag">
            {item}
          </li>
        ))}
      </ul>
      <h2>{title}</h2>
      <p>{caseDate}</p>
      <ImageLoaderComponent
        src={casePreviewImage}
        alt={"Portfolio case Preview"}
        isFiil={true}
        className="aspect-video"
      />
      <ul>
        {caseContent?.map(({ children }, index) => {
          const currentText = children[0].text;
          const isTitle = Boolean(children[0].marks[0]);
          return currentText?.length > 0 ? (
            <li
              key={index}
              className={`${isTitle ? "font-bold" : "font-normal"}`}
            >
              {currentText}
            </li>
          ) : null;
        })}
      </ul>
      <ul>
        {caseImages?.map(({ asset }, index) => (
          <li key={index}>
            <ImageLoaderComponent
              src={asset.url}
              alt={"Portfolio case images of work process."}
              isFiil={true}
              className=" aspect-video"
            />
          </li>
        ))}
      </ul>
      <div>{caseComment}{caseRate}</div>
    </SectionTemplComponent>
  );
};

export default Case;
