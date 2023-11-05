import { FC } from "react";
import s from "./Carousel.module.css";
import { DescEditorComponent, ImageLoaderComponent, RankedComponent } from "..";
import { ITestimonialsPreview } from "@/interfaces";

const CarouselTemplate: FC<ITestimonialsPreview> = ({
  comment,
  ranked,
  business,
  avatar,
}) => {
  const convertedRanked = Math.ceil((ranked / 100) * 5);
  return (
    <li className={s.sentence}>
      <div className={s.box}>
        <ImageLoaderComponent
          src={"/frame.png"}
          alt={""}
          isFiil={false}
          sizes={192}
          className={s.signature}
        />
      </div>
      <span className={s.client}>{`${business}:`}</span>
      <div className={s.content}>
        <ImageLoaderComponent
          src={avatar}
          alt={"Customer avatar image."}
          className={s.image}
          sizes={98}
          style={{ objectPosition: "top" }}
          isFiil={true}
        />
        <span>
          <p className={s.name}>Customer</p>
          <RankedComponent rankedValue={convertedRanked} />
          <span className={s.ranked}>{`(${convertedRanked}/5)`}</span>
        </span>
      </div>
      <span className={s.description}>
        <DescEditorComponent description={comment} />
      </span>
    </li>
  );
};

export default CarouselTemplate;
