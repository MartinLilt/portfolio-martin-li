import { FC } from "react";
import { IconComponent } from "..";
import s from "./Ranked.module.css";

const Ranked: FC<{ rankedValue: number }> = ({ rankedValue }) => {
  const currentRank = Array(rankedValue)
    .fill("")
    .map((_, index) => (
      <IconComponent
        nameIcon={"BsFillStarFill"}
        propsIcon={{ size: 18 }}
        key={index}
      />
    ));

  return <span className={s.ranked}>{currentRank}</span>;
};

export default Ranked;
