import clsx from "clsx";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type Props<T extends ElementType> = {
  as?: T;
  variant?: "dark" | "light";
  icon?: React.ReactNode;
  className?: string;
};

export const SocialButton = <T extends ElementType = "button">({
  variant = "light",
  children,
  icon,
  as,
  className,
  ...props
}: Props<T> & ComponentPropsWithoutRef<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={clsx(
        "flex items-center justify-center gap-4 rounded-md border-2 py-4 px-6 font-spaceMono font-bold",
        variant === "dark" && "border-white  bg-black text-white",
        variant === "light" && "border-black bg-white text-black",
        className
      )}
      {...props}
    >
      {icon ? icon : null}
      {children}
    </Component>
  );
};
