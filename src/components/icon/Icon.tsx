import loadable from "@loadable/component";
import { IconType } from "react-icons/lib";
import { FC } from "react";
import { IIconTempl } from "./icon.interface";

const Icon: FC<IIconTempl> = ({ nameIcon, propsIcon }) => {
  const lib = nameIcon.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(" ")[0].toLocaleLowerCase();
  const ElementIcon = loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: (el: JSX.Element) => el[nameIcon as keyof JSX.Element]
  });
  const IconComponent: IconType = ElementIcon as IconType;

  return <IconComponent {...propsIcon} />;
};

export default Icon;
