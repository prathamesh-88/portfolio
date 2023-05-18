import "../styles/global.css";
import Script from "next/script";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { GA_TRACKING_ID } from "@/lib/gtag";

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric);
// }
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        id="ga4-tag"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
