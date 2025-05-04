import { cn } from "@/utils/ui";
import { PropsWithChildren } from "react";

interface BaseSectionProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export const BaseSection = ({ id, className, children }: BaseSectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen flex flex-col justify-center p-12 sm:p-16 md:p-24 lg:p-32",
        className
      )}
    >
      {children}
    </section>
  );
};
