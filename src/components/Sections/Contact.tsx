import { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/utils/constants";
import { LinkedinLogo, GithubLogo, FacebookLogo } from "@phosphor-icons/react";
import { BaseSection } from "./BaseSection";
import { sendGAEvent } from "@next/third-parties/google";

const iconSize = 24;

const socialIcons = {
  linkedin: <LinkedinLogo size={iconSize} />,
  github: <GithubLogo size={iconSize} />,
  facebook: <FacebookLogo size={iconSize} />,
};

type ContactProps = ComponentPropsWithoutRef<typeof BaseSection>;

export const Contact = (props: ContactProps) => {
  const handleMailToClick = () => {
    sendGAEvent("event", "mailToClicked");
  };

  const handleSocialClick = ({ icon }: (typeof DATA.socials)[number]) => {
    sendGAEvent("event", "socialClicked", icon);
  };

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
          Contact
        </h2>

        <div className="space-y-8">
          <motion.a
            href={`mailto:${DATA.email}`}
            className="block text-2xl sm:text-3xl md:text-4xl font-light hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            onClick={handleMailToClick}
          >
            {DATA.email}
          </motion.a>

          <motion.div
            className="pt-8 border-t border-foreground/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {DATA.socials.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                  onClick={() => handleSocialClick(item)}
                >
                  {socialIcons[item.icon as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </BaseSection>
  );
};
