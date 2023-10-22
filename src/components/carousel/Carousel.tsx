import { FC } from "react";
import s from "./Carousel.module.css";
import { DescEditorComponent, ImageLoaderComponent, RankedComponent } from "..";
import { ICarousel } from "./carousel.interface";

const CarouselTemplate: FC<ICarousel> = ({
  customerFrom,
  customerName,
  desc,
  ranked,
  img: { url, alt },
}) => {
  return (
    <li className={s.sentence}>
     <div className={s.box}> <ImageLoaderComponent
        src={"/frame.png"}
        alt={""}
        isFiil={false}
        sizes={192}
        className={s.signature}
      /></div>
      <span className={s.client}>{`${customerFrom}:`}</span>
      <div className={s.content}>
        <ImageLoaderComponent
          src={url}
          alt={alt}
          className={s.image}
          sizes={98}
          style={{ objectPosition: "top" }}
          isFiil={true}
        />
        <span>
          <p className={s.name}>{customerName}</p>
          <RankedComponent rankedValue={ranked} />
          <span className={s.ranked}>{`(${ranked}/5)`}</span>
        </span>
      </div>
      <span className={s.description}>
        <DescEditorComponent description={desc} />
      </span>
    </li>
  );
};

export default CarouselTemplate;
