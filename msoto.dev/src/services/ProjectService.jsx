import { useTranslation } from 'react-i18next';
import { GetBasePathByLight, GetBasePathByThemeSelected } from '../helpers/ImagesHelper';

export function GetProjects(light = true){
    const { t } = useTranslation();
    const path = light ? GetBasePathByLight() : GetBasePathByThemeSelected();

    return [
        {
            id: 1,
            title: "ParQ",
            subtitle: t("project-parq-subtitle"),
            description: t("project-parq-description"),
            image: "/images/Projects/parq.png",
            tools: [
                {
                    title: "C#",
                    icon_url: `${path}csharp.png`
                },
                {
                    title: "Xamarin Froms",
                    icon_url: `${path}xamarinforms.png`
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: `${path}aspnet.png`
                },
                {
                    title: "Azure",
                    icon_url: `${path}azure.png`
                }
            ]
        },
        {
            id: 2,
            title: "GIS",
            subtitle: t("project-gis-subtitle"),
            description: t("project-gis-description"),
            image: "/images/Projects/gis.png",
            tools: [
                {
                    title: "C#",
                    icon_url: `${path}csharp.png`
                },
                {
                    title: "Type Script",
                    icon_url: `${path}typescript.png`
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: `${path}aspnet.png`
                },
                {
                    title: "React",
                    icon_url: `${path}react.png`
                }
            ]
        },
        {
            id: 3,
            title: "Licencias",
            subtitle: t("project-licences-subtitle"),
            description: t("project-licences-description"),
            image: "/images/Projects/licences.png",
            tools: [
                {
                    title: "C#",
                    icon_url: `${path}csharp.png`
                },
                {
                    title: "Xamarin Froms",
                    icon_url: `${path}xamarinforms.png`
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: `${path}aspnet.png`
                },
                {
                    title: "Azure",
                    icon_url: `${path}azure.png`
                }
            ]
        },
        {
            id: 4,
            title: "Fotomultas",
            subtitle: t("project-photofines-subtitle"),
            description: t("project-photofines-description"),
            image: "/images/Projects/fotomultas.jpg",
            tools: [
                {
                    title: "C#",
                    icon_url: `${path}csharp.png`
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: `${path}aspnet.png`
                },
                {
                    title: "SQL Server",
                    icon_url: `${path}sqlserver.png`
                }
            ]
        },
        {
            id: 5,
            title: "Centro de Mando",
            subtitle: t("project-commandcenter-subtitle"),
            description: t("project-commandcenter-description"),
            image: "/images/Projects/centromando.png",
            tools: [
                {
                    title: "C#",
                    icon_url: `${path}csharp.png`
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: `${path}aspnet.png`
                },
                {
                    title: "SQL Server",
                    icon_url: `${path}sqlserver.png`
                }
            ]
        },
        {
            id: 6,
            title: "HandHeld",
            subtitle: t("project-handheld-subtitle"),
            description: t("project-handheld-description"),
            image: "/images/Projects/handheld.png",
            tools: [
                {
                    title: "C#",
                    icon_url: `${path}csharp.png`
                },
                {
                    title: "Xamarin Froms",
                    icon_url: `${path}xamarinforms.png`
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: `${path}aspnet.png`
                },
                {
                    title: "SQL Server",
                    icon_url: `${path}sqlserver.png`
                },
                {
                    title: "Express Js",
                    icon_url: `${path}expressjs.png`
                }
            ]
        },
        {
            id: 7,
            title: "Control Vehicular",
            subtitle: t("project-vehicularcontrol-subtitle"),
            description: t("project-vehicularcontrol-description"),
            image: "/images/Projects/controlvehicular.png",
            tools: [
                {
                    title: "C#",
                    icon_url: `${path}csharp.png`
                },
                {
                    title: "Blazor Server",
                    icon_url: `${path}blazor.png`
                },
                {
                    title: "SQL Server",
                    icon_url: `${path}sqlserver.png`
                }
            ]
        }
    ];
}

export function GetProjectById(id, light = true){
    const projects = GetProjects(light);
    const project = projects.filter(x => x.id == id)[0];

    return project;
}