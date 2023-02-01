import { Montserrat, Space_Mono } from "@next/font/google";

import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin-ext", "latin"],
  variable: "--font-montserrat",
});

const spaceMono = Space_Mono({
  subsets: ["latin-ext", "latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={`${montserrat.variable} ${spaceMono.variable} flex min-h-screen flex-col`}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
