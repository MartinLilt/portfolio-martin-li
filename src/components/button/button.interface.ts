import { CSSProperties, ReactNode } from "react";

export interface IButtin {
    children: ReactNode | string;
    buttonType?: 'button' | 'submit';
    buttonTitle: string;
    buttonCustomStyles?: CSSProperties;
    onClickEvent?: () => void;
}

