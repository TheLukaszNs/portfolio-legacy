import { type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/navbar";
import { About } from "../sections/about";
import { Hero } from "../sections/hero";
import { Projects } from "../sections/projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>mysliwiec.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
