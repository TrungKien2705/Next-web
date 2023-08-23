"use client";

import { createContext, useState } from "react";

type ThemeContextType = {
  toggle: () => void;
  mode: "light" | "dark";
};

export const ThemeContext = createContext<ThemeContextType>({
  toggle: () => {},
  mode: "dark",
});

export const ThemeProvider = ({ children }: any) => {
  const [mode, setMode] = useState<"light" | "dark">("dark"); // Set the type for mode here

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
