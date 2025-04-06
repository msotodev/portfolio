import Project from "./Project/Project";
import { GetIconUri } from "../../../helpers/IconHelper"
import { useTranslation } from 'react-i18next';

export default function Projects(){
    const projects = GetProjects();

    return (
        <section className="flex flex-col gap-[10px]">
            {projects.map(project => (
                <Project key={project.title}
                         title={project.title}
                         subtitle={project.subtitle}
                         description={project.description}
                         image={project.image}
                         tools={project.tools} />
            ))}
        </section>
    )
}

function GetProjects(){
    const color = "FFFFFF";
    const { t } = useTranslation();

    return [
        {
            title: "ParQ",
            subtitle: t("project-parq-subtitle"),
            description: t("project-parq-description"),
            image: "/images/Projects/parq.png",
            tools: [
                {
                    title: "C#",
                    icon_url: GetIconUri("55205", color)
                },
                {
                    title: "Xamarin Froms",
                    icon_url: GetIconUri("35116", color)
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: GetIconUri("3756", color)
                },
                {
                    title: "Azure",
                    icon_url: GetIconUri("QaejVa62EGjF", color)
                }
            ]
        },
        {
            title: "GIS",
            subtitle: t("project-gis-subtitle"),
            description: t("project-gis-description"),
            image: "/images/Projects/gis.png",
            tools: [
                {
                    title: "C#",
                    icon_url: GetIconUri("55205", color)
                },
                {
                    title: "Type Script",
                    icon_url: GetIconUri("cHBUT9SmrD2V", color)
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: GetIconUri("3756", color)
                },
                {
                    title: "React",
                    icon_url: GetIconUri("35989", color)
                }
            ]
        },
        {
            title: "Licencias",
            subtitle: t("project-licences-subtitle"),
            description: t("project-licences-description"),
            image: "/images/Projects/licences.png",
            tools: [
                {
                    title: "C#",
                    icon_url: '/images/technologies/light/csharp.png'
                },
                {
                    title: "Xamarin Froms",
                    icon_url: '/images/technologies/light/project.png'
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: "/images/technologies/light/aspnet.png"
                },
                {
                    title: "Azure",
                    icon_url: "/images/technologies/light/azure.png"
                }
            ]
        },
        {
            title: "Fotomultas",
            subtitle: t("project-photofines-subtitle"),
            description: t("project-photofines-description"),
            image: "/images/Projects/fotomultas.jpg",
            tools: [
                {
                    title: "C#",
                    icon_url: "/images/technologies/light/csharp.png"
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: "/images/technologies/light/aspnet.png"
                },
                {
                    title: "SQL Server",
                    icon_url: "/images/technologies/light/sqlserver.png"
                }
            ]
        },
        {
            title: "Centro de Mando",
            subtitle: t("project-commandcenter-subtitle"),
            description: t("project-commandcenter-description"),
            image: "/images/Projects/centromando.png",
            tools: [
                {
                    title: "C#",
                    icon_url: "/images/technologies/light/csharp.png"
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: "/images/technologies/light/aspnet.png"
                },
                {
                    title: "SQL Server",
                    icon_url: "/images/technologies/light/sqlserver.png"
                }
            ]
        },
        {
            title: "HandHeld",
            subtitle: t("project-handheld-subtitle"),
            description: t("project-handheld-description"),
            image: "/images/Projects/handheld.png",
            tools: [
                {
                    title: "C#",
                    icon_url: GetIconUri("55205", color)
                },
                {
                    title: "Xamarin Froms",
                    icon_url: GetIconUri("35116", color)
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: GetIconUri("3756", color)
                },
                {
                    title: "SQL Server",
                    icon_url: GetIconUri("10429", color)
                },
                {
                    title: "Express Js",
                    icon_url: GetIconUri("kg46nzoJrmTR", color)
                }
            ]
        },
        {
            title: "Control Vehicular",
            subtitle: t("project-vehicularcontrol-subtitle"),
            description: t("project-vehicularcontrol-description"),
            image: "/images/Projects/controlvehicular.png",
            tools: [
                {
                    title: "C#",
                    icon_url: GetIconUri("55205", color)
                },
                {
                    title: "Blazor Server",
                    icon_url: GetIconUri("vuBZHdDl29U9", color)
                },
                {
                    title: "SQL Server",
                    icon_url: GetIconUri("10429", color)
                }
            ]
        }
    ];
}