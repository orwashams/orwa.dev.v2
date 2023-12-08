import "@mantine/core/styles.css";
import "~/styles/globals.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import { Encode_Sans_Condensed, Vazirmatn, Alef } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

import { I18nProviderClient } from "~/locales/client";

const encode_sans_condensed = Encode_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-encode-sans-condensed",
  weight: "200",
});

const amatic_sc = Alef({
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
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactElement;
}) {
  return (
    <html
      lang="en"
      className={`${encode_sans_condensed.variable} ${amatic_sc.variable} ${vazirmatn.variable}`}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body className="bg-gradient-to-b from-[#13172e] to-[#15162c] px-16 text-white">
        <TRPCReactProvider cookies={cookies().toString()}>
          <MantineProvider>
            <I18nProviderClient locale={locale}>{children} </I18nProviderClient>
          </MantineProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
