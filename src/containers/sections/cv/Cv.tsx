import { FC } from "react";
import s from "./Cv.module.css";
import { ICvProps } from "@/interfaces";

const Cv: FC<{ options: ICvProps[] }> = ({ options }) => {
  const handleDownloadCvFile = () => {
    const googleDriveFileId = process.env.NEXT_PUBLIC_CV_ID;
    const googleDriveUrl = `${process.env.NEXT_PUBLIC_CV_LINK}&id=${googleDriveFileId}`;
    const a = document.createElement("a");
    a.href = googleDriveUrl;
    a.download = "cv.pdf";
    a.click();
  };

  return (
    <section className={s.section}>
      <div className={`custom-c ${s.container}`}>
        <ul className={s.list}>
          {options?.map(({ largeValueOfExp, textDesc }, index) => {
            return (
              <li className={s.sentence} key={index}>
                <span className={s.text}>{largeValueOfExp}</span>
                <p className={s.description}>{textDesc}</p>
              </li>
            );
          })}
        </ul>
        <button
          title="Click to download my CV..."
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
