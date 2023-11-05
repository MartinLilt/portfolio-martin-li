import { CursorProvider, ModalProvider, ToastProvider } from "@/providers";
import "../assets/styles/globals.css";
import '@/assets/themes/light.theme.css';
import '@/assets/themes/dark.theme.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <ToastProvider>
        <CursorProvider>
          <div className="overflow-hidden">
            <Component {...pageProps} />
          </div>
        </CursorProvider>
      </ToastProvider>
    </ModalProvider>
  );
}
