type Props = {
  children: string;
};

export const AccentedText = ({ children }: Props) => {
  return (
    <span className="-z-10 inline-block rounded-xl bg-gray-200/80 px-4 py-2 text-accent backdrop-blur-md">
      {children}
    </span>
  );
};
