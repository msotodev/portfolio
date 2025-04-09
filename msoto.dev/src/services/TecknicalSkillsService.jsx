import { useTranslation } from 'react-i18next';
import { GetBasePathByThemeSelected } from '../helpers/ImagesHelper';

export function GetProgrammingLangauages(path) {
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

export function GetFrameworks(path){
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

export function GetDatabases(path){
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

export function GetFrontTechnologies(path){
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

export function GetTechnicalSkills(){
    const path = GetBasePathByThemeSelected();    
    const { t } = useTranslation();

    return [
        {
            title: t("subtitle-programming-lang"),
            skills: GetProgrammingLangauages(path)
        },
        {
            title: t("subtitle-frameworks"),
            skills: GetFrameworks(path)
        },
        {
            title: t("subtitle-databases"),
            skills: GetDatabases(path)
        },
        {
            title: t("subtitle-frontend"),
            skills: GetFrontTechnologies(path)
        }
    ];
}