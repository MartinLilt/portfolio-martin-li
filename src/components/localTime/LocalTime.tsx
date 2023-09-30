import { FC, useEffect, useRef } from "react";
import s from "./LocalTime.module.css";

const LocalTIme: FC = () => {
    const currentTimeRef = useRef<HTMLSpanElement | null>(null);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateTime = () => {
      if (currentTimeRef.current) {
        currentTimeRef.current.textContent = `Local time: ${new Date().toLocaleTimeString(
          "en-US",
          {
            timeZone: "Europe/Vilnius",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }
        )}`;
      }
    };

    intervalIdRef.current = setInterval(updateTime, 1000);

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);
  
  return (
    <span className={s.time}>
      <span className="absolute" ref={currentTimeRef}>
        Loading...
      </span>
    </span>
  );
};

export default LocalTIme;
