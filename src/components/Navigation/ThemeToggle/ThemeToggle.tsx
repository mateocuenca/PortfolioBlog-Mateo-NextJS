import { useTheme } from "next-themes";
import { Moon, SunDim } from "phosphor-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <Moon size={24} /> : <SunDim size={24} />}
    </button>
  );
};

export default ThemeToggle;
