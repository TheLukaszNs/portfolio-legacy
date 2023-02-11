import clsx from "clsx";
import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { SocialButton } from "../social-button";

type Props = {
  variant?: "dark" | "light";
  title: string;
  description?: string;
  socials?: {
    name: string;
    url: string;
    icon?: React.ReactNode;
  }[];
  year?: string;
};

export const Card = ({
  variant = "dark",
  title,
  description,
  socials,
  year,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-300, 300], [-5, 5]);

  const hasSocials = socials && socials.length > 0;

  const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const relativeX = e.clientX - ref.current.getBoundingClientRect().left;
    const relativeY = e.clientY - ref.current.getBoundingClientRect().top;

    x.set(relativeX - ref.current.offsetWidth / 2);
    y.set(relativeY - ref.current.offsetHeight / 2);
  };

  return (
    <motion.article
      className={clsx("w-full lg:w-3/4 ", variant === "dark" && "ml-auto")}
      style={{
        perspective: 2000,
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        className={clsx(
          "relative w-full rounded-md py-6 px-8",
          variant === "dark" && "ml-auto bg-black text-white",
          variant === "light" &&
            "mr-auto border border-black bg-white/60 text-black backdrop-blur-md"
        )}
        style={{
          rotateX,
          rotateY,
        }}
        whileHover={{
          z: 10,
        }}
      >
        <h3 className="mb-4 text-3xl font-bold md:text-8xl">{title}</h3>
        <p
          className={clsx(
            "max-w-[90%] text-xl md:text-3xl",
            hasSocials && "mb-12 md:mb-24"
          )}
        >
          {description}
        </p>
        <motion.div
          className="flex w-3/4 flex-col justify-start gap-4 md:w-auto md:flex-row"
          style={{
            perspective: 1000,
          }}
        >
          {socials?.map(({ name, url, icon }, index) => (
            <motion.div
              whileHover={{
                scale: 1.2,
              }}
              key={index}
            >
              <SocialButton
                as="a"
                href={url}
                target="_blank"
                variant={variant === "dark" ? "light" : "dark"}
                icon={icon}
              >
                {name}
              </SocialButton>
            </motion.div>
          ))}
        </motion.div>
        <p className="text-md absolute bottom-0 right-0 mb-6 mr-4 font-spaceMono [writing-mode:_vertical-rl]">
          {year || new Date().getFullYear()}
        </p>
      </motion.div>
    </motion.article>
  );
};

export type { Props as CardProps };
