import Project from "./Project/Project";
import { GetIconUri } from "../../../helpers/IconHelper"

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

    return [
        {
            title: "ParQ",
            subtitle: "Virtual Parking",
            description: "Is a virtual solution parking that provide a zone or slot to choose in the spaces of your city...",
            image: "/images/Projects/parq.png",
            tools: [
                {
                    title: "C#",
                    icon_url: GetIconUri("55205", color)
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
            subtitle: "Geographic Information System",
            description: "Is a web app thinking to draw layers with Geojson objects and make a relation with specific data about this place.",
            tools: [
                {
                    title: "C#",
                    icon_url: GetIconUri("55205", color)
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: GetIconUri("3756", color)
                },
            ]
        },
        {
            title: "Licences",
            subtitle: "Licensing of businesses",
            description: "Is a virtual solution parking that provide a zone or slot to choose in the spaces of your city...",
            tools: [
                {
                    title: "C#",
                    icon_url: GetIconUri("55205", color)
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
            title: "Fotomultas",
            subtitle: "Control and Management of Photo Infringements",
            description: "Is a virtual solution parking that provide a zone or slot to choose in the spaces of your city...",
            tools: [
                {
                    title: "C#",
                    icon_url: GetIconUri("55205", color)
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: GetIconUri("3756", color)
                },
                {
                    title: "SQL Server",
                    icon_url: GetIconUri("10429", color)
                }
            ]
        },
        {
            title: "Centro de Mando",
            subtitle: "HandHeld Finance and Reporting",
            description: "Is a virtual solution parking that provide a zone or slot to choose in the spaces of your city...",
            tools: [
                {
                    title: "C#",
                    icon_url: GetIconUri("55205", color)
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: GetIconUri("3756", color)
                },
                {
                    title: "SQL Server",
                    icon_url: GetIconUri("10429", color)
                }
            ]
        },
        {
            title: "HandHeld",
            subtitle: "Traffic Violations",
            description: "Is a virtual solution parking that provide a zone or slot to choose in the spaces of your city...",
            image: "/images/Projects/handheld.png",
            tools: [
                {
                    title: "C#",
                    icon_url: GetIconUri("55205", color)
                },
                {
                    title: "ASP.NET MVC",
                    icon_url: GetIconUri("3756", color)
                },
                {
                    title: "SQL Server",
                    icon_url: GetIconUri("10429", color)
                }
            ]
        },
        {
            title: "Padrón Vehicular",
            subtitle: "Management of vehicle procedures",
            description: "Is a virtual solution parking that provide a zone or slot to choose in the spaces of your city...",
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