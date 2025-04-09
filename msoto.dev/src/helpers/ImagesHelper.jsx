import { useContext } from "react";
import { ThemeContext } from "../poviders/ThemeProvider";

export function GetBasePathByThemeSelected(){
    const { isDarkMode } = useContext(ThemeContext);
    const theme = isDarkMode ? 'light' :  'dark';
    const path = `/images/technologies/${theme}/`;

    return path;
}

export function GetBasePathByDark(){
    return `/images/technologies/dark/`;
}

export function GetBasePathByLight(){
    return `/images/technologies/light/`;
}