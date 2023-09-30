import React, { FC } from "react";
import s from "./Testimonials.module.css";
import { CarouselComponent, IconComponent } from "@/components";

const Testimonials: FC = () => {
  const handleToggleCarousel = () => {};

  return (
    <section data-anchor-testimonials className="pb-40">
      <div className="custom-c">
        <h3 className={s.title}>Testimonials</h3>
        <div className="flex mb-4">
          <button
            type="button"
            onClick={handleToggleCarousel}
            className="p-4 md:px-8 rounded-xl text-primary 
        bg-secondary border-[0.05rem] border-primary mr-4
        hover:text-secondary hover:bg-primary flex xl:hidden"
          >
            <IconComponent
              nameIcon="AiOutlineArrowLeft"
              propsIcon={{ size: 24 }}
            />
          </button>
          <button
            type="button"
            onClick={handleToggleCarousel}
            className="p-4 md:px-8 rounded-xl text-primary 
        bg-secondary border-[0.05rem] border-primary 
        hover:text-secondary hover:bg-primary flex xl:hidden"
          >
            <IconComponent
              nameIcon="AiOutlineArrowRight"
              propsIcon={{ size: 24 }}
            />
          </button>
        </div>
        <ul className="text-primary">
          {[
            {
              id: 1,
              customerName: "Leonard Heiser",
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
              customerName: "Leonard Heiser",
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
              customerName: "Leonard Heiser",
              customerFrom: "Envato customer",
              img: { url: "/avatar.jpg", alt: "Testimonials avatar" },
              desc: `We have purchased well into the thousands of items, 
              but this is without doubt one of the best we’ve have been 
              lucky enough to work on, the attention to detail apparent 
              throughout, and the delivery is impressively intuitive.`,
              ranked: 5,
            },
          ].map((item, index) => (
            <CarouselComponent key={index} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
 