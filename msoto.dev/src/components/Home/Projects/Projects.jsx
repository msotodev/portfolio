import Project from "./Project/Project";
import { useTranslation } from 'react-i18next';
import { GetProjects } from '../../../services/projectService';
import IconTitle from '../../Common/IconTitle/IconTitle';
import { GetBasePathByThemeSelected } from '../../../helpers/ImagesHelper';

export default function Projects(){
    const { t } = useTranslation();
    const projects = GetProjects();
    const path = GetBasePathByThemeSelected();

    return (
        <>
            <IconTitle icon={`${path}project.png`}
                       title={t("title-projects")} />
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
        </>
    )
}