import { div, li } from "framer-motion/client";
import { useTheme } from "../context/ThemeContext";
import PaintIcon from "../icons/PaintIcon";
import { useState } from "react";

function Nav() {
  const { changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("light");

  const themes = [
    { value: "light", label: "☀ Light" },
    { value: "dark", label: "🌙 Dark" },
    { value: "pink", label: "🎀 Pink" },
    { value: "earthy", label: "🍃 Earthy" },
  ];

  const handleThemeChange = (value) => {
    setSelectedTheme(value);
    changeTheme(value);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-sm z-50" style={{ backgroundColor: "var(--bg-color)" }}>
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide" style={{ color: "var(--headingOne-color)" }}>
          SLNZ
        </h1>
        <div className="relative flex items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none" style={{ backgroundColor: "var(--bg-color)"}} aria-label="Cambiar tema" title="Cambiar tema">
        <PaintIcon />
          </button>

          {isOpen && (
            <div className="right-0 rounded-md shadow-md border" style={{ backgroundColor: "var(--bg-color)", borderColor: "var(--border-color)"}}>
              <ul className="py-1">
                {themes.map((theme) => (
                  <li key={theme.value} onClick={() => handleThemeChange(theme.value)} className={`cursor-pointer px-4 py-2 text-sm ${selectedTheme === theme.value ? "font-bold" : ""}`} style={{ color: "var(--text-color)"}}>
                      {theme.label}
                  </li>
                ))}
              </ul>

            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
