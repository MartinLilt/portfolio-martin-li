import { FC, createElement } from "react";
import { IDescriptionEditor } from "./descEditor.interface";

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

  return <p>{addHtmlElementToComponent(description)}</p>;
};

export default DescEditer;
