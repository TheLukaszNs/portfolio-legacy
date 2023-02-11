import { Card, type CardProps } from "../../components/card";
import { Section } from "../../components/section";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiGithub, mdiWeb } from "@mdi/js";

import linkImage from "../../../public/link.png";

type ProjectProps = Pick<
  CardProps,
  "title" | "description" | "variant" | "socials" | "year"
>;

const projects: ProjectProps[] = [
  {
    title: "Dzbanban",
    description: "A kanban implementation for a better future",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/Pichi00/kanbanTable",
        icon: <Icon path={mdiGithub} size={1} />,
      },
    ],
    year: "2023",
  },
  {
    title: "WPFQuiz",
    description: "What’s the answer 🤔❓",
    variant: "light",
    year: "2022",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/TheLukaszNs/WPFQuiz",
        icon: <Icon path={mdiGithub} size={1} />,
      },
    ],
  },
  {
    title: "mysliwiec.me",
    description: "My personal portfolio.",
    year: "2023",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/TheLukaszNs/portfolio",
        icon: <Icon path={mdiGithub} size={1} />,
      },
      {
        name: "Demo",
        url: "https://mysliwiec.me",
        icon: <Icon path={mdiWeb} size={1} />,
      },
    ],
  },
  {
    title: "Quick Chat ⚡",
    description: "Blazingly fast chat application ⚡",
    variant: "light",
    year: "2023",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/TheLukaszNs/quick-chat",
        icon: <Icon path={mdiGithub} size={1} />,
      },
    ],
  },
];

export const Projects = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [200, 30]);

  return (
    <Section id="projects" className="relative gap-8 overflow-hidden md:gap-16">
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
      <motion.div
        className="absolute inset-y-0 -left-24 -z-10 flex w-[30vmax] items-center justify-center md:right-16 md:left-auto"
        style={{
          y,
        }}
      >
        <Image src={linkImage} alt="decorative image of a link" priority />
      </motion.div>

      <span className="absolute inset-y-0 left-0 -z-20 hidden rotate-180 text-center font-spaceMono text-[15vmin] font-bold leading-none text-gray-200 [text-orientation:_mixed] [writing-mode:_vertical-lr] md:inline-block">
        PR0JECT5
      </span>
    </Section>
  );
};
