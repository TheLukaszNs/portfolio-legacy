import { Montserrat } from "@next/font/google";

import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin-ext", "latin"],
  variable: "--font-montserrat",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${montserrat.variable} flex min-h-screen flex-col`}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
