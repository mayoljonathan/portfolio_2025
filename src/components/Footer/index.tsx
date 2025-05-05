import Link from "next/link";
import { BaseSection } from "../Sections/BaseSection";
import { DATA } from "@/utils/constants";

export const Footer = () => {
  return (
    <BaseSection className="min-h-0 !pt-0 !pb-6">
      <span className="text-foreground/60">
        Copyright © 2025. Built with 💖 using Next.js and Tailwind CSS.{" "}
        <Link
          className="text-blue-400 hover:text-blue-500"
          target="_blank"
          href={DATA.current_portfolio_source_url}
        >
          Source in GitHub
        </Link>
      </span>
    </BaseSection>
  );
};
