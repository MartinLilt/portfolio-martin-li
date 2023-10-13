import { FC, MouseEvent } from "react";
import Link from "next/link";
import s from "./Logo.module.css";
import { useRouter } from "next/router";
import { IconComponent } from "..";

const Logo: FC<{ logoSize: number }> = ({ logoSize }) => {
  const { route } = useRouter();
  const isHomePage = route === "/";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
    }
  };

  return (
    <Link
      href={"/"}
      onClick={handleClick}
      draggable={false}
      title={
        isHomePage
          ? "Click to change the theme.."
          : "Click to move from home page..."
      }
      className={`${s.logo} ${isHomePage ? s.home : s.border}`}
    >
      <p className={s.text} style={{ fontSize: logoSize }}>
        M<span className="hidden 2sm:block">artin</span>
        <span className="text-accent">Li</span>
      </p>
      <span style={{ display: isHomePage ? "block" : "none" }}>
        <IconComponent nameIcon={"BiSolidMoon"} />
      </span>
    </Link>
  );
};

export default Logo;
