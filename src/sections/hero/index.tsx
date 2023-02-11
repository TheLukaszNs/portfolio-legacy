import { AccentedText } from "../../components/accented-text";
import { SocialButton } from "../../components/social-button";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiInstagram } from "@mdi/js";

export const Hero = () => {
  return (
    <section className="flex min-h-[calc(100vh_-_84px)] flex-1 snap-y flex-col items-start justify-center px-6 md:min-h-[calc(100vh_-_153px)] md:px-16 lg:px-32">
      <div className="font-montserrat">
        <h1 className="mt-auto mb-auto text-4xl font-black lg:text-5xl">
          Hi, I’m <AccentedText>Łukasz</AccentedText> !
        </h1>
        <span className="mt-2 mb-8 block text-xl font-bold lg:text-3xl ">
          Fullstack TypeScript Developer
        </span>
        <div className="hidden flex-row gap-8 md:flex">
          <SocialButton
            icon={<Icon path={mdiGithub} size={1} />}
            className="font-sans"
          >
            GitHub
          </SocialButton>
          <SocialButton
            icon={<Icon path={mdiLinkedin} size={1} />}
            className="font-sans"
          >
            LinkedIn
          </SocialButton>
          <SocialButton
            icon={<Icon path={mdiInstagram} size={1} />}
            className="font-sans"
          >
            Instagram
          </SocialButton>
        </div>
      </div>
    </section>
  );
};
