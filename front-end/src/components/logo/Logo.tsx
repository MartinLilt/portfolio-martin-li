import { FC } from "react";
import Link from "next/link";
import s from './Logo.module.css'

const Logo: FC<{ logoSize: number }> = ({ logoSize }) => {
  return (
    <Link
      href={"/"}
      title="Click to move from home page..."
      className={s.logo}
      style={{ fontSize: logoSize }}
    >
      Martin.Li
    </Link>
  );
};

export default Logo;
