import { BgCanvasProvider, ModalProvider } from "@/providers";
import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundaryComponent, PreloaderComponent } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundaryComponent>
      <PreloaderComponent>
        <BgCanvasProvider>
          <ModalProvider>
            <div className="overflow-hidden">
              <Component {...pageProps} />
            </div>
          </ModalProvider>
        </BgCanvasProvider>
      </PreloaderComponent>
    </ErrorBoundaryComponent>
  );
}
