import { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/utils/constants";
import { BaseSection } from "./BaseSection";

type IntroProps = ComponentPropsWithoutRef<typeof BaseSection>;

export const Intro = (props: IntroProps) => {
  return (
    <BaseSection {...props}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tighter mb-8 sm:mb-16">
          <span className="block">Hey there! 👋</span>
          <span className="block mt-2">I&apos;m {DATA.name}</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-foreground/60 max-w-xl">
          I&apos;m a <span className="font-bold">full stack developer</span>{" "}
          specializing in building modern web and mobile applications, with
          expertise across the entire development stack and a focus on creating
          seamless user experiences.
        </p>
      </motion.div>
    </BaseSection>
  );
};
