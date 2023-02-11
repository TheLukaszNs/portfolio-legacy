import clsx from "clsx";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"section"> & {
  fullHeight?: boolean;
};

export const Section = forwardRef<HTMLDivElement, Props>(
  ({ children, className = "", fullHeight = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={clsx(
          `flex flex-col px-6 py-8 font-montserrat md:px-16 lg:px-32`,
          className,
          {
            "min-h-[calc(100vh_-_84px)] flex-1 justify-center md:min-h-[calc(100vh_-_153px)]":
              fullHeight,
          }
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
