import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { cn } from "@/utils/ui";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

type ThemeSwitcherProps = ComponentPropsWithoutRef<"button">;

const iconSize = 20;

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className, ...restProps } = props;
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const Icon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <button
      className={cn(
        "size-10 rounded-full border border-foreground/20 flex items-center justify-center",
        className
      )}
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      {...restProps}
    >
      <Icon size={iconSize} />
    </button>
  );
};
