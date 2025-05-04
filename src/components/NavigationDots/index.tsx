import { cn } from "@/utils/ui";

type NavigationDotsProps = {
  className?: string;
  sections: string[];
  activeSection: string;
  scrollToSection: (section: string) => void;
};

export const NavigationDots = ({
  className,
  sections,
  activeSection,
  scrollToSection,
}: NavigationDotsProps) => {
  return (
    <div className={cn("flex flex-col gap-6 sm:gap-8 ", className)}>
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className="group flex items-center"
          aria-label={`Navigate to ${section} section`}
        >
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section ? "bg-foreground" : "bg-foreground/20"
            }`}
          />
          <span
            className={`ml-4 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              activeSection === section
                ? "text-foreground"
                : "text-foreground/60"
            }`}
          >
            {section}
          </span>
        </button>
      ))}
    </div>
  );
};
