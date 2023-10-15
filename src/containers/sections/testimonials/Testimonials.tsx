import React, { FC, useState } from "react";
import s from "./Testimonials.module.css";
import {
  CarouselComponent,
  IconComponent,
  SectionTemplComponent,
} from "@/components";
import { useMediaQuery } from "react-responsive";

const Testimonials: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const wholeAmountOfCases = isDesktop ? 3 : 6;

  const handleSlide = (direction: number) => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + direction + wholeAmountOfCases) % wholeAmountOfCases
    );
  };

  return (
    <SectionTemplComponent
      title="Testimonials"
      sectionId="testimonials"
      className="pb-40"
    >
      {" "}
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
          {[
            {
              id: 1,
              customerName: "Leonard H.",
              customerFrom: "Envato customer",
              img: { url: "/avatar.jpg", alt: "Testimonials avatar" },
              desc: `We have purchased well into the thousands of items, 
but this is without doubt one of the best we’ve have been 
lucky enough to work on, the attention to detail apparent 
throughout, and the delivery is impressively intuitive.`,
              ranked: 5,
            },
            {
              id: 2,
              customerName: "Leonard 2",
              customerFrom: "Envato customer",
              img: { url: "/avatar.jpg", alt: "Testimonials avatar" },
              desc: `We have purchased well into the thousands of items, 
but this is without doubt one of the best we’ve have been 
lucky enough to work on, the attention to detail apparent 
throughout, and the delivery is impressively intuitive.`,
              ranked: 5,
            },
            {
              id: 3,
              customerName: "Leonard 3",
              customerFrom: "Envato customer",
              img: { url: "/avatar.jpg", alt: "Testimonials avatar" },
              desc: `We have purchased well into the thousands of items, 
but this is without doubt one of the best we’ve have been 
lucky enough to work on, the attention to detail apparent 
throughout, and the delivery is impressively intuitive.`,
              ranked: 4,
            },
            {
              id: 4,
              customerName: "Leonard 4",
              customerFrom: "Envato customer",
              img: { url: "/avatar.jpg", alt: "Testimonials avatar" },
              desc: `We have purchased well into the thousands of items, 
but this is without doubt one of the best we’ve have been 
lucky enough to work on, the attention to detail apparent 
throughout, and the delivery is impressively intuitive.`,
              ranked: 5,
            },
            {
              id: 5,
              customerName: "Leonard 5",
              customerFrom: "Envato customer",
              img: { url: "/avatar.jpg", alt: "Testimonials avatar" },
              desc: `We have purchased well into the thousands of items, 
but this is without doubt one of the best we’ve have been 
lucky enough to work on, the attention to detail apparent 
throughout, and the delivery is impressively intuitive.`,
              ranked: 5,
            },
            {
              id: 6,
              customerName: "Leonard 6",
              customerFrom: "Envato customer",
              img: { url: "/avatar.jpg", alt: "Testimonials avatar" },
              desc: `We have purchased well into the thousands of items, 
but this is without doubt one of the best we’ve have been 
lucky enough to work on, the attention to detail apparent 
throughout, and the delivery is impressively intuitive.`,
              ranked: 3,
            },
          ].map((item, index) => (
            <CarouselComponent key={index} {...item} />
          ))}
        </ul>
      </div>
    </SectionTemplComponent>
  );
};

export default Testimonials;
