import Image from "next/image";
import { FC } from "react";
import { IPictureProps } from "./image.interface";

const ImageLoader: FC<IPictureProps> = ({
  src,
  alt,
  loading = "lazy",
  className,
  sizes,
  style,
  isFiil = false,
  imageProps,
}) => {
  return (
    <span
      className={`block ${className} overflow-hidden relative h-auto`}
      style={{ width: sizes, height: sizes }}
    >
      <Image
        src={src}
        alt={alt}
        draggable={false}
        quality={100}
        loading={loading}
        className="object-cover"
        style={style}
        {...(isFiil ? { layout: "fill" } : { width: sizes, height: sizes })}
        {...imageProps}
      />
    </span>
  );
};

export default ImageLoader;
