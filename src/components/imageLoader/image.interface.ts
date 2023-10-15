import { ImageProps } from "next/image";
import { CSSProperties, HTMLProps } from "react";

export interface IPictureProps {
    src: string;
    alt: string;
    loading?: 'lazy' | 'eager';
    className?: HTMLProps<HTMLElement>["className"];
    sizes?: number;
    style?: CSSProperties;
    isFiil: boolean;
    imageProps?: ImageProps;
}

