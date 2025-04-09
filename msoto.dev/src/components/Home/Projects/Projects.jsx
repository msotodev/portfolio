import Project from "./Project/Project";
import { GetProjects } from '../../../services/projectService';

export default function Projects(){
    const projects = GetProjects();

    return (
        <section className="flex flex-col gap-[10px]">
            {projects.map(project => (
                <Project key={project.title}
                         id={project.id}
                         title={project.title}
                         subtitle={project.subtitle}
                         description={project.description}
                         image={project.image}
                         tools={project.tools} />
            ))}
        </section>
    )
}