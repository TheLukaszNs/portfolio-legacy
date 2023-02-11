import Image from "next/image";
import { AccentedText } from "../../components/accented-text";
import { ProgressBar } from "../../components/progress-bar";
import { Section } from "../../components/section";
import chartImage from "../../../public/chart.png";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [200, 30]);

  return (
    <Section
      ref={ref}
      id="about"
      className="relative justify-center gap-8 overflow-hidden"
      fullHeight
    >
      <motion.div
        className="absolute -left-24 -z-10 w-[30vmax] md:right-16 md:left-auto"
        style={{
          y,
        }}
      >
        <Image src={chartImage} alt="decorative image of a chart" priority />
      </motion.div>
      <p className="text-xl font-bold md:text-3xl">
        I’m a <AccentedText>full stack</AccentedText> developer based in{" "}
        <AccentedText>Gliwice</AccentedText>, Poland.
      </p>
      <p className="text-xl font-bold md:text-3xl">
        I love creating <AccentedText>mobile apps</AccentedText> and{" "}
        <AccentedText>modern websites</AccentedText>
      </p>

      <ProgressBar
        className="w-full text-xs md:w-3/4 md:text-base"
        progress={0.9}
      >
        TypeScript / JavaScript
      </ProgressBar>
      <ProgressBar
        className="w-full text-xs md:w-3/4 md:text-base"
        progress={0.9}
      >
        React + React Native
      </ProgressBar>
      <ProgressBar
        className="w-full text-xs md:w-3/4 md:text-base"
        progress={0.75}
      >
        Node.js
      </ProgressBar>
      <ProgressBar
        className="w-full text-xs md:w-3/4 md:text-base"
        progress={0.6}
      >
        Next
      </ProgressBar>
      <ProgressBar
        className="w-full text-xs md:w-3/4 md:text-base"
        progress={0.33}
      >
        tRPC (with T3 stack)
      </ProgressBar>

      <span className="absolute inset-y-0 right-0 -z-20 hidden text-center font-spaceMono text-[15vmin] font-bold leading-none text-gray-200 [text-orientation:_mixed] [writing-mode:_vertical-rl] md:inline-block">
        AB0UT_ME
      </span>
    </Section>
  );
};
