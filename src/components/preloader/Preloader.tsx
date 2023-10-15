import { FC, ReactNode, useEffect, useRef } from "react";
import s from "./Preloader.module.css";
import { useRouter } from "next/router";

const Preloader: FC<{ children: ReactNode }> = ({ children }) => {
  const { events } = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (events && ref.current) {
      document.body.style.overflowY = "auto";
      ref.current.style.display = "none";
    }
  }, [events]);

  return (
    <>
      <div className={s.overlay} ref={ref}>
        <span className={s.loading}>Loading...</span>
      </div>
      {children}
    </>
  );
};

export default Preloader;
