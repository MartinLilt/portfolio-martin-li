import { FC } from "react";
import s from "./Carousel.module.css";
import Image from "next/image";
import { DescEditorComponent, RankedComponent } from "..";
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
      <span className={s.client}>{`${customerFrom}:`}</span>
      <div className={s.content}>
        <Image
          src={url}
          alt={alt}
          width={98}
          height={98}
          draggable={false}
          className={s.image}
        />
        <span>
          <p className={s.name}>{customerName}</p>
          <RankedComponent rankedValue={ranked} />
          <span className="block mt-2 font-light">{`(${ranked}/5)`}</span>
        </span>
      </div>
      <span className={s.desc}>
        <DescEditorComponent description={desc} />
      </span>
    </li>
  );
};

export default CarouselTemplate;
