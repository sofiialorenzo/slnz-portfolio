import { useTheme } from "../context/ThemeContext";
import PaintIcon from "../icons/PaintIcon";
import { useState } from "react";

function Nav() {
  const { changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("light");

  const themes = [
    { value: "light", label: "🌞 Light" },
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
    <header
      className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-sm z-50 shadow-sm"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        <h1
          className="text-lg sm:text-xl font-bold tracking-wide"
          style={{ color: "var(--headingOne-color)" }}
        >
          SLNZ
        </h1>

        <div className="relative flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full focus:outline-none border transition-transform hover:scale-105"
            style={{
              backgroundColor: "var(--border-color)",
              color: "var(--bg-color)",
              borderColor: "var(--bg-color)",
            }}
            aria-label="Cambiar tema"
            title="Cambiar tema"
          >
            <PaintIcon />
          </button>

          {isOpen && (
            <div
              className="absolute top-12 sm:top-14 right-0 w-40 sm:w-48 rounded-md shadow-sm border transform scale-95 animate-fadeIn"
              style={{
                backgroundColor: "var(--bg-color)",
                borderColor: "var(--border-color)",
              }}
            >
              <ul className="py-2">
                {themes.map((theme) => (
                  <li
                    key={theme.value}
                    onClick={() => handleThemeChange(theme.value)}
                    className={`cursor-pointer px-4 py-2 text-sm sm:text-base hover:bg-opacity-10 rounded-md transition ${
                      selectedTheme === theme.value
                        ? "font-bold bg-opacity-10"
                        : ""
                    }`}
                    style={{
                      color: selectedTheme === theme.value ? "var(--bg-color)" : "var(--text-color)",
                      backgroundColor: selectedTheme === theme.value ? "var(--border-color)" : "transparent",
                    }}
                  >
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
