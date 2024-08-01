import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combine multiple class names (especially for Shadcnui)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Scroll to a specific section smoothly
export function scrollToSection(section: string) {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// For DownArrow component (go to the first section)
export function scrollToBottom() {
  const element = document.getElementById("aboutMeSection");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// For UpArrow component (go to the top of the page)
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
