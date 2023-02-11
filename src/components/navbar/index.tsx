import { Button } from "../button";
import { MdMenu, MdClose } from "react-icons/md";
import { DownloadIcon } from "../icons/Download";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MenuIcon = isOpen ? MdClose : MdMenu;

  const toggleMenu = () => setIsOpen((o) => !o);

  return (
    <nav className="sticky top-0 z-10 overflow-hidden border-b border-b-gray-100 font-montserrat backdrop-blur-md md:hidden">
      <LayoutGroup>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="overflow-hidden bg-black"
              layout
              initial={{
                height: 0,
              }}
              animate={{
                height: "auto",
              }}
              exit={{
                height: 0,
              }}
            >
              <motion.div
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  transition: {
                    delay: 0.2,
                  },
                }}
                className="px-8 pt-8 pb-12"
              >
                <Button icon={<DownloadIcon />}>Resume</Button>
                <ul className="mt-8 font-bold leading-10 text-white">
                  <li>
                    <Link href="#about" scroll={false} onClick={toggleMenu}>
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" scroll={false} onClick={toggleMenu}>
                      Projects
                    </Link>
                  </li>
                  <li>Contact Me</li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          layout
          animate={{
            backgroundColor: isOpen
              ? "rgba(0, 0, 0, 1)"
              : "rgba(255, 255, 255, 0.8)",
            color: isOpen ? "#ffffff" : "#000000",
          }}
          transition={{
            duration: 0.2,
          }}
          className="z-10 flex items-center justify-between px-6 py-6"
        >
          <h1 className="text-3xl font-bold">mysliwiec.</h1>
          <MenuIcon className="text-4xl" onClick={toggleMenu} />
        </motion.div>
      </LayoutGroup>
    </nav>
  );
};

const DesktopNavbar = () => {
  return (
    <nav className="sticky top-0 z-10 hidden items-center justify-between border-b border-b-gray-100 bg-white/80 px-16 py-12 font-montserrat backdrop-blur-md md:flex lg:px-32">
      <h1 className="text-3xl font-bold">mysliwiec.</h1>
      <ul className="flex items-center gap-8 font-bold lg:gap-16">
        <li>
          <Link href="#about" scroll={false}>
            About Me
          </Link>
        </li>
        <li>
          <Link href="#projects" scroll={false}>
            Projects
          </Link>
        </li>
        <li>Contact Me</li>
        <li>
          <Button icon={<DownloadIcon />}>Resume</Button>
        </li>
      </ul>
    </nav>
  );
};
