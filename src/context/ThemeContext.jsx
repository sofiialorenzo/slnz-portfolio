import { createContext, useContext, useState, useEffect, Children } from "react";

const ThemeContext = createContext();

const themes = ["light", "dark", "pink", "earthy"];

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    const changeTheme = (newTheme) => {
        if (themes.includes(newTheme)) setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);