import Project from "./Project/Project";
import { GetIconUri } from "../../../helpers/IconHelper"

export default function Projects(){
    const projects = GetProjects();

    return (
        <section className="flex flex-col gap-[15px]">
            {projects.map(project => (
                <Project key={project.title}
                         title={project.title}
                         subtitle={project.subtitle}
                         description={project.description}
                         image="/images/Projects/parq.png"
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
            title: "ParQ 1",
            subtitle: "Virtual Parking",
            description: "Is a virtual solution parking that provide a zone or slot to choose in the spaces of your city...",
            tools: [
                {
                    title: "Linked In",
                    url: "https://www.linkedin.com/in/mario-soto-moreno-547186189",
                    icon_url: GetIconUri("8808", color)
                }
            ]
        },
        {
            title: "ParQ 2",
            subtitle: "Virtual Parking",
            description: "Is a virtual solution parking that provide a zone or slot to choose in the spaces of your city...",
            tools: [
                {
                    title: "Linked In",
                    url: "https://www.linkedin.com/in/mario-soto-moreno-547186189",
                    icon_url: GetIconUri("8808", color)
                }
            ]
        }
    ];
}