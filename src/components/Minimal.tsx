"use client";

import { useState, useEffect } from "react";
import { Intro } from "./Sections/Intro";
import { Works } from "./Sections/Works";
import { About } from "./Sections/About";
import { Contact } from "./Sections/Contact";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ScrollIndicator } from "./ScrollIndicator";
import { AnimatePresence } from "framer-motion";
import { NavigationDots } from "./NavigationDots";
import { Footer } from "./Footer";

const sections = ["intro", "works", "about", "contact"];

export const Minimal = () => {
  const [activeSection, setActiveSection] =
    useState<(typeof sections)[number]>("intro");
  const [isAtTop, setIsAtTop] = useState(true);

  // Track scroll position
  useEffect(() => {
    if (window.scrollY > 0) {
      setIsAtTop(false);
    }

    const handleScroll = () => setIsAtTop(window.scrollY < 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set up intersection observer to update active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only update active section when element is entering the viewport
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // Consider element in view when it's in the middle 20% of the viewport
        threshold: 0.1, // Trigger when at least 10% is visible
      }
    );

    const sectionElements = document.querySelectorAll("section[id]");
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Scroll to section when navigation is clicked
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      // Use standard smooth scrolling
      window.scrollTo({
        top: sectionElement.offsetTop - 40, // Small offset for better positioning
        behavior: "smooth",
      });
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        const currentIndex = sections.indexOf(activeSection);
        const nextIndex = (currentIndex + 1) % sections.length;
        scrollToSection(sections[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = sections.indexOf(activeSection);
        const prevIndex =
          (currentIndex - 1 + sections.length) % sections.length;
        scrollToSection(sections[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection]);

  return (
    <div className="min-h-dvh">
      <ThemeSwitcher className="fixed top-4 sm:top-8 right-4 sm:right-8" />

      <NavigationDots
        className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50"
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="overflow-y-auto">
        <Intro id="intro" />
        <Works id="works" />
        <About id="about" />
        <Contact className="min-h-[90vh]" id="contact" />
      </main>

      <Footer />

      <AnimatePresence>{isAtTop && <ScrollIndicator />}</AnimatePresence>
    </div>
  );
};
