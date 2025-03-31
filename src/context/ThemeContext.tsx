import { useEffect, useState } from "react";
import { ThemeKey, themes } from "../themes";
import { ThemeContext } from "./useTheme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeKey>("light");

  const setTheme = (key: ThemeKey) => {
    setThemeState(key);
    const className = themes[key].className;
    const root = document.documentElement;

    // Remover clases anteriores
    Object.values(themes).forEach(t => {
      if (t.className) root.classList.remove(t.className);
    });

    if (className) root.classList.add(className);
    localStorage.setItem("theme", key);
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeKey | null;
    setTheme(stored || "light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
