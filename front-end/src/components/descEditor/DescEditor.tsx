import { FC, createElement } from "react";
import { IDescriptionEditor } from "./descEditor.interface";
import s from './DescEditor.module.css'

const DescEditer: FC<IDescriptionEditor> = ({ description }) => {
  const addHtmlElementToComponent = (inputText: string) => {
    const firstElement = inputText.split(" ")[0];
    const textWithoutFirstElement = inputText.split(firstElement)[1];
    return (
      <>
        {createElement("span", null, firstElement)}
        {textWithoutFirstElement}
      </>
    );
  };

  return <p className={s.desc}>{addHtmlElementToComponent(description)}</p>;
};

export default DescEditer;
