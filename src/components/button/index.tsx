import type { PropsWithChildren, ComponentPropsWithoutRef } from "react";

type Props = Omit<ComponentPropsWithoutRef<"button">, "className"> & {
  icon?: React.ReactNode;
};

export const Button = ({
  children,
  icon,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-lg bg-accent blur-md" />
      <button
        className="relative w-full rounded-lg bg-accent py-4 px-6 font-bold text-white"
        {...props}
      >
        <span className="flex items-center justify-center gap-3">
          {children}
          {icon}
        </span>
      </button>
    </div>
  );
};
