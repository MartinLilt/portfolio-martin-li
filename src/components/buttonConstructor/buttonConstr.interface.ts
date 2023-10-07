import { ModalCookieTypes, ModalTypes } from "@/providers";

export interface IButtonConstructorProps {
    buttonTitle: string;
    buttonCustomStyles?: string;
    buttonNewStyles?: string;
    isButtonDisabled?: boolean;
    icon?: {
        name: string;
        size: number;
    }
    event: () => void;
    textContent?: string;
}

export interface IButtonConstructorOptions {
    options: IButtonConstructorProps[];
}