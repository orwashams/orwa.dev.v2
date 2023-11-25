import "~/styles/globals.css";

import {
  Encode_Sans_Condensed,
  Noto_Sans_Hebrew,
  Amatic_SC,
} from "next/font/google";
import { cookies } from "next/headers";
import { getCurrentLocale } from "~/locales/server";

import { TRPCReactProvider } from "~/trpc/react";

const encode_sans_condensed = Encode_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-encode-sans-condensed",
  weight: "200",
});

const noto_sans_hebrew = Amatic_SC({
  subsets: ["hebrew"],
  variable: "--font-noto-sans-hebrew",
  weight: "700",
});

export const metadata = {
  title: "Orwa",

  description:
    "Orwa, a freelancer, making website, mobile apps and custom software.",

  icons: [{ rel: "icon", url: "/logo/white_svg.svg", sizes: "any" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getCurrentLocale();

  return (
    <html
      lang="en"
      dir={locale === "en" ? "ltr" : "rtl"}
      className={`${encode_sans_condensed.variable} ${noto_sans_hebrew.variable}`}
    >
      <body>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
