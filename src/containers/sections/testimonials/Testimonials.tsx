import React, { FC, useState } from "react";
import s from "./Testimonials.module.css";
import {
  CarouselComponent,
  IconComponent,
  SectionTemplComponent,
} from "@/components";
import { useMediaQuery } from "react-responsive";
import { ITestimonialsPreview } from "@/interfaces";

const Testimonials: FC<{ options: ITestimonialsPreview[] }> = ({ options }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const caseAmount = options.length;
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const currentAmount = isDesktop ? caseAmount / 2 : caseAmount;

  const handleSlide = (direction: number) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + direction + currentAmount) % currentAmount
    );
  };

  return (
    <SectionTemplComponent
      title="Testimonials"
      sectionId="testimonials"
      className="pb-40"
    >
      <div className={s.content}>
        <button
          type="button"
          onClick={() => handleSlide(-1)}
          className={s.button}
        >
          <IconComponent nameIcon="AiOutlineArrowLeft" />
        </button>
        <button
          type="button"
          onClick={() => handleSlide(1)}
          className={s.button}
        >
          <IconComponent nameIcon="AiOutlineArrowRight" />
        </button>
      </div>
      <div className="relative overflow-hidden w-full">
        <ul
          className={s.list}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {options?.map((item, index) => (
            <CarouselComponent key={index} {...item} />
          ))}
        </ul>
      </div>
    </SectionTemplComponent>
  );
};

export default Testimonials;
