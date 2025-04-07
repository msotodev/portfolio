import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    //const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //const darkMode = localStorage.getItem("darkMode") !== null ? localStorage.getItem("darkMode") : prefersDark;

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        localStorage.setItem("darkMode", isDarkMode);
        const root = window.document.documentElement;

        if (isDarkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(prev => !prev);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.string.isRequired
}