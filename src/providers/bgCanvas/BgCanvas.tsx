import { FC, ReactNode } from "react";

const BgCanvas: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <canvas
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: "-1rem",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      />
      {children}
    </>
  );
};

export default BgCanvas;
