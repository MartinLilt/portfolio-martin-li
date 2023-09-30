import { BgCanvasProvider } from "@/providers";
import "../assets/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BgCanvasProvider>
      <Component {...pageProps} />
    </BgCanvasProvider>
  );
}
