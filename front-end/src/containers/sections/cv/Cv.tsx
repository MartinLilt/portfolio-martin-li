import { FC } from "react";
import s from './Cv.module.css'

const Cv: FC = () => {

  const handleDownloadCvFile = () => {
    const googleDriveFileId = "15YtMo4xTwv1jcNcrxvRM3Fa4jlXuImPv";
    const googleDriveUrl = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
    const a = document.createElement("a");
    a.href = googleDriveUrl;
    a.download = "cv.pdf";
    a.click();
  };

  return (
    <section className={s.section}>
      <div className={`custom-c ${s.container}`}>
        <ul className={s.list}>
          {[
            { largeValueOfExp: 3, textDesc: "Years of Experance" },
            { largeValueOfExp: 31, textDesc: "Number of Successful contracts" },
          ].map((item, index) => {
            return (
              <li
                className={s.sentence}
                key={index}
              >
                <span className={s.text}>{item.largeValueOfExp}</span>
                <p className={s.desc}>{item.textDesc}</p>
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
