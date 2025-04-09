import { useContext } from "react";
import { ThemeContext } from "../poviders/ThemeProvider";

export function GetSocialMediaIcons(){
    const { isDarkMode } = useContext(ThemeContext);
    const theme = isDarkMode ? 'light' :  'dark';
    const path = `/images/technologies/${theme}/`;
    
    return [
        {
            title: "Linked In",
            url: "https://www.linkedin.com/in/mario-soto-moreno-547186189",
            icon_url: `${path}linkedin.png`
        },
        {
            title: "Github",
            url: "https://github.com/MatProgrammerSM",
            icon_url: `${path}github.png`
        },
        {
            title: "Discord",
            url: "https://discord.gg/",
            icon_url: `${path}discord.png`
        },
        {
            title: "Gmail",
            url: "mailto:mariosotomor.dev@gmail.com",
            icon_url: `${path}mail.png`
        }
    ];
}