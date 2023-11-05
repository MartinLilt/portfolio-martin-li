import loadable from "@loadable/component";
import { IconType } from "react-icons/lib";
import { FC } from "react";
import { IIconTempl } from "./icon.interface";
import s from "./Icon.module.css";

const Icon: FC<IIconTempl> = ({ nameIcon, propsIcon, size = 20 }) => {
  if (!nameIcon) {
    // Handle the case where nameIcon is not provided. You can return a default icon or null.
    return null;
  }

  const lib = nameIcon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLowerCase();

  const ElementIcon = loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: (el: JSX.Element) => el[nameIcon as keyof JSX.Element],
  });
  const IconComponent: IconType = ElementIcon as IconType;

  return (
    <span style={{ width: size, height: size }} className={s.svg}>
      <IconComponent {...propsIcon} width={20} height={20} />
    </span>
  );
};

export default Icon;
