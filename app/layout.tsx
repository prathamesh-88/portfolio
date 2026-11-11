import type { Metadata } from "next";
import Script from "next/script";
import Providers from "@/components/providers";
import { GA_TRACKING_ID } from "@/lib/gtag";
import "@/styles/global.css";
export const metadata: Metadata = {
  title: {
    default: "Prathamesh Tamanekar",
    template: "%s | Prathamesh Tamanekar",
  },
  description: "Backend development portfolio of Prathamesh Tamanekar.",
  openGraph: { images: ["/images/preview.png"] },
  twitter: { card: "summary_large_image", images: ["/images/preview.png"] },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('portfolio-theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d);}catch(e){}})();",
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        {GA_TRACKING_ID && (
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
        )}
      </body>
    </html>
  );
}
