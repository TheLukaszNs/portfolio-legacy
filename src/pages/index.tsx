import { type NextPage } from "next";
import Head from "next/head";
import { AccentedText } from "../components/accented-text";
import { Navbar } from "../components/navbar";
import { About } from "../sections/about";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>mysliwiec.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <section className="flex min-h-[calc(100vh_-_84px)] flex-1 flex-col items-start justify-center px-6 md:min-h-[calc(100vh_-_153px)] md:px-16 lg:px-32">
        <div className="font-montserrat">
          <h1 className="mt-auto mb-auto text-4xl font-black lg:text-5xl">
            Hi, I’m <AccentedText>Łukasz</AccentedText> !
          </h1>
          <span className="mt-2 block text-xl font-bold lg:text-3xl ">
            Fullstack TypeScript Developer
          </span>
        </div>
      </section>

      <About />
    </>
  );
};

export default Home;
