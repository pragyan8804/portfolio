"use client";

import { useEffect, useState } from "react";
import { Flex, IconButton } from "@/once-ui/components";

export const ThemeToggler = () => {
  const [isDark, setIsDark] = useState(true); // Default theme is dark

  // Toggle theme function
  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      htmlElement.setAttribute('data-theme', 'light');
      setIsDark(false);
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
      setIsDark(true);
    }
  };

  // Set initial theme to dark on first render
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
   <Flex position="relative" zIndex={10}>
  <IconButton
    icon={isDark ? "light" : "dark"} 
    onClick={toggleTheme}
    tooltip="Toggle Theme"
    style={{
      // Styles for light mode
      background: isDark
        ? "rgba(20, 20, 20, 0.2)" // Off black background for dark mode
        : "rgba(200, 200, 200, 0.2)", // Gray transparent background for light mode
      backdropFilter: "blur(10px)", // Background blur effect
      borderRadius: isDark ? "20%" : "20%", // Rounded corners
      padding: "0.5rem",
      border: isDark
        ? "1px solid rgba(100, 100, 100, 0.5)" // Dark gray border for dark mode
        : "1px solid rgba(150, 150, 150, 0.5)", // Light gray border for light mode
      color: isDark ? "white" : "black", // White icon in dark mode, black in light mode
    }}
  />
</Flex>
  );
};
