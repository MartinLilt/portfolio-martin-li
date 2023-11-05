import { FC } from "react";
import s from "./Cv.module.css";
import { ICvPreview } from "@/interfaces";

const Cv: FC<{ options: [ICvPreview] }> = ({ options }) => {
  const { publishedAt, uploadingCv } = options[0];

  const handleDownloadCvFile = () => {
    const link = document.createElement("a");
    link.href = uploadingCv;
    link.download = `martinli-cv-${publishedAt}.pdf`;
    link.click();
  };

  return (
    <section className={s.section}>
      <div className={`custom-c ${s.container}`}>
        <ul className={s.list}>
          {[
            { largeValueOfExp: 3, textDesc: "Years of Experience" },
            { largeValueOfExp: 31, textDesc: "Number of Successful contracts" },
          ].map(({ largeValueOfExp, textDesc }, index) => {
            return (
              <li className={s.sentence} key={index}>
                <span className={s.text}>{largeValueOfExp}</span>
                <p className={s.description}>{textDesc}</p>
              </li>
            );
          })}
        </ul>
        <button
          title={`Click to download my CV...`}
          className={s.button}
          type="button"
          onClick={handleDownloadCvFile}
        >
          Download my C.V
        </button>
      </div>
    </section>
  );
};

export default Cv;
