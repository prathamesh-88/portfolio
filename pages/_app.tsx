import "../styles/global.css";
import Script from "next/script";
import type { AppProps } from "next/app";
import { GA_TRACKING_ID } from "@/lib/gtag";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
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
    </ChakraProvider>
  );
}
