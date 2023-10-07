import { ReactNode } from "react";

export interface IButtin {
    children: ReactNode | string;
    buttonType?: 'button' | 'submit';
    buttonTitle: string;
    buttonCustomStyles?: string;
    buttonNewStyles?: string;
    isButtonDisabled?: boolean;
    onClickEvent?: () => void;
}

