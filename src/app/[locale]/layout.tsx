import "~/styles/globals.css";

import { Encode_Sans_Condensed, Vazirmatn, Amatic_SC } from "next/font/google";
import { cookies } from "next/headers";
import { getCurrentLocale } from "~/locales/server";

import { TRPCReactProvider } from "~/trpc/react";

const encode_sans_condensed = Encode_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-encode-sans-condensed",
  weight: "200",
});

const amatic_sc = Amatic_SC({
  subsets: ["hebrew"],
  variable: "--font-amatic-sc",
  weight: "700",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-arabic",
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
      dir="ltr"
      className={`${encode_sans_condensed.variable} ${amatic_sc.variable} ${vazirmatn.variable}`}
    >
      <body>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
