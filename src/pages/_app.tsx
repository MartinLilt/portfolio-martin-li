import { BgCanvasProvider, ModalProvider } from "@/providers";
import "../assets/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BgCanvasProvider>
      <ModalProvider>
        <div className="overflow-hidden"><Component {...pageProps} /></div>
      </ModalProvider>
    </BgCanvasProvider>
  );
}
