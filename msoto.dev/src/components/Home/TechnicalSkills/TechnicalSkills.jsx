import { IconList } from '../../Common/IconList/IconList';
import { useTranslation } from 'react-i18next';
import { useContext } from "react";
import { ThemeContext } from "../../../poviders/ThemeProvider";

export default function TechnicalSkills() {
    const { isDarkMode } = useContext(ThemeContext);
    const theme = isDarkMode ? 'light' :  'dark';
    const path = `/images/technologies/${theme}/`;

    const programmingLangauages = GetProgrammingLangauages(path);
    const frameworks = GetFrameworks(path);
    const databases = GetDatabases(path);
    const frontTechnologies = GetFrontTechnologies(path);
    const { t } = useTranslation();

    return (
        <section className='flex flex-col gap-[25px]'>
            <article className='flex flex-col gap-[25px]'>
                <h3 className="text-2xl text-center font-semibold text-[var(--primary-text-color)]">
                    {t("subtitle-programming-lang")}
                </h3>
                <div className='flex justify-center items-center'>
                    <IconList icons={programmingLangauages} />
                </div>
            </article>
            <article className='flex flex-col gap-[25px]'>
                <h3 className="text-2xl text-center font-semibold text-[var(--primary-text-color)]">
                    {t("subtitle-frameworks")}
                </h3>
                <div className='flex justify-center items-center'>
                    <IconList icons={frameworks} />
                </div>
            </article>
            <article className='flex flex-col gap-[25px]'>
                <h3 className="text-2xl text-center font-semibold text-[var(--primary-text-color)]">
                    {t("subtitle-databases")}
                </h3>
                <div className='flex justify-center items-center'>
                    <IconList icons={databases} />
                </div>
            </article>
            <article className='flex flex-col gap-[25px]'>
                <h3 className="text-2xl text-center font-semibold text-[var(--primary-text-color)]">
                    {t("subtitle-frontend")}
                </h3>
                <div className='flex justify-center items-center'>
                    <IconList icons={frontTechnologies} />
                </div>
            </article>
        </section>
    )
}

function GetProgrammingLangauages(path) {
    return [
        {
            title: "C#",
            icon_url: `${path}csharp.png`
        },
        {
            title: "Type Script",
            icon_url: `${path}typescript.png`
        },
        {
            title: "JavaScript",
            icon_url: `${path}javascript.png`
        },
        {
            title: "Php",
            icon_url: `${path}php.png`
        },
        {
            title: "Python",
            icon_url: `${path}python.png`
        }
    ];
}

function GetFrameworks(path){
    return [
        {
            title: "React",
            icon_url: `${path}react.png`
        },
        {
            title: "Xamarin Froms",
            icon_url: `${path}xamarinforms.png`
        },
        {
            title: "ASP.NET MVC",
            icon_url: `${path}aspnet.png`
        }
    ]; 
}

function GetDatabases(path){
    return [
        {
            title: "SQL Server",
            icon_url: `${path}sqlserver.png`
        },
        {
            title: "MySQL",
            icon_url: `${path}mysql.png`
        },
        {
            title: "SQLite",
            icon_url: `${path}sqlite.png`
        },
        {
            title: "Postgre",
            icon_url: `${path}postgre.png`
        }
    ]
}

function GetFrontTechnologies(path){
    return [
        {
            title: "HTML",
            icon_url: `${path}html.png`
        },
        {
            title: "CSS",
            icon_url: `${path}css.png`
        },
        {
            title: "Tailwind",
            icon_url: `${path}tailwind.png`
        },
        {
            title: "Bootstrap",
            icon_url: `${path}bootstrap.png`
        },
    ]
}