import { motion } from "framer-motion";
import { BaseSection } from "./BaseSection";
import { ComponentPropsWithoutRef } from "react";
import { DATA } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";

type WorksProps = ComponentPropsWithoutRef<typeof BaseSection>;

export const Works = (props: WorksProps) => {
  return (
    <BaseSection {...props}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-3xl"
      >
        <h2 className="text-sm uppercase tracking-widest text-foreground/60 mb-8 sm:mb-16">
          Featured Works
        </h2>

        <div className="space-y-12 sm:space-y-24">
          {DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                <div className="size-10 flex items-center mr-4">
                  {project.avatar_url && (
                    <Image
                      alt={project.title}
                      src={project.avatar_url!}
                      className="rounded"
                      width={40}
                      height={40}
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              {!project.is_public && (
                <div className="flex ml-0 sm:ml-14 mb-4">
                  <span className="text-muted-foreground text-xs border px-1.5 py-0.5 rounded">
                    Confidential
                  </span>
                </div>
              )}
              <div className="ml-0 sm:ml-14 flex flex-col sm:flex-row sm:items-baseline">
                <p className="text-foreground/60">{project.description}</p>
              </div>
              {project.is_public && (
                <div className="ml-0 sm:ml-14 flex flex-col sm:flex-row sm:items-baseline mt-4">
                  <Link
                    href={project.demo_url}
                    target="_blank"
                    className="w-fit text-primary px-3 py-1.5 border hover:bg-primary/10 transition-colors duration-300 text-sm font-medium rounded"
                  >
                    View Demo
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <span className="text-foreground/60">
            You can view my other projects from my{" "}
            <Link
              target="_blank"
              className="text-blue-400 hover:text-blue-500"
              href={DATA.old_portfolio_url}
            >
              old portfolio ✨
            </Link>
          </span>
        </div>
      </motion.div>
    </BaseSection>
  );
};
