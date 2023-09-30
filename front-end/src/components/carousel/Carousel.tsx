import { FC } from "react";
import s from "./Carousel.module.scss";
import Image from "next/image";
import { DescEditorComponent, RankedComponent } from "..";
import { ICarousel } from "./carousel.interface";
import { motion, AnimatePresence } from "framer-motion";

const CarouselTemplate: FC<ICarousel> = ({
  customerFrom,
  customerName,
  desc,
  ranked,
  img: { url, alt },
}) => {
  return (
    <AnimatePresence>
      <motion.li
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="border-[0.05rem] border-primary rounded-xl p-4 pb-12 hidden first:block"
      >
        <span className="block font-light mb-4">{`${customerFrom}:`}</span>
        <div className="flex mb-4">
          <Image
            src={url}
            alt={alt}
            width={98}
            height={98}
            draggable={false}
            className="rounded-xl mr-4"
          />
          <span>
            <p
              className="p-2 px-4 rounded-xl 
                    border-[0.05rem] border-op-primary flex max-w-max 
                    font-light mb-4"
            >
              {customerName}
            </p>
            <RankedComponent rankedValue={ranked} />
          </span>
        </div>
        <span className="block md:w-[95%]"><DescEditorComponent description={desc} /></span>
      </motion.li>
    </AnimatePresence>
  );
};

export default CarouselTemplate;
