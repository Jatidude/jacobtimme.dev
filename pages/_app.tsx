import "../styles/global.css";
import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-brown h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
