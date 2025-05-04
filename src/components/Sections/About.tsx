import { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/utils/constants";
import { BaseSection } from "./BaseSection";

type AboutProps = ComponentPropsWithoutRef<typeof BaseSection>;

export const About = (props: AboutProps) => {
  return (
    <BaseSection {...props}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl"
      >
        <h2 className="text-sm uppercase tracking-widest text-foreground/60 mb-8 sm:mb-16">
          About
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-base sm:text-lg text-foreground/80 mb-8">
              I&apos;m {DATA.name}, a seasoned and adaptable software engineer
              with 6 years of experience building scalable web and mobile
              applications. My journey in software development has been driven
              by a passion for continuous learning and staying ahead of emerging
              technologies.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 mb-8">
              I specialize in creating innovative solutions that not only meet
              but exceed client expectations, consistently delivering
              high-quality results. My approach combines technical expertise
              with a keen understanding of user needs, ensuring that every
              project I work on is both technically sound and user-friendly.
            </p>
            <p className="text-base sm:text-lg text-foreground/80">
              When I&apos;m not coding, I like to spend my time watching current
              technology trends, watching movies and playing games.
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-sm uppercase tracking-widest text-foreground/60 mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {DATA.technologies.map((tech, index) => (
                  <span key={index} className="text-foreground/80 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-sm uppercase tracking-widest text-foreground/60 mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                {DATA.work_history.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row">
                    <span className="text-sm text-foreground/40 sm:min-w-32 mb-1 sm:mb-0 mt-0.5">
                      {item.year}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-foreground/80">
                        <span className="font-medium">{item.position}</span>
                        {item.company && <span>{` @ ${item.company}`}</span>}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </BaseSection>
  );
};
