import { useTranslation } from 'react-i18next';
import IconTitle from "../../Common/IconTitle/IconTitle";
import { GetBasePathByThemeSelected } from '../../../helpers/ImagesHelper';
import { GetWorkExperiences } from '../../../services/WorkExperienceService'
import ExperienceItem from "./ExperienceItem";

export default function Experience(){
    const { t } = useTranslation();
    const path = GetBasePathByThemeSelected();
    const experiences = GetWorkExperiences();

    return (
        <>
            <IconTitle icon={`${path}workexperience.png`}
                       title={t("experience-title")} />

            <section>
                {experiences.map(experience => (
                <ExperienceItem key={experience.companyName}
                                title={experience.title}
                                date={experience.date}
                                description={experience.description} />  
                ))} 
            </section>
        </>
    );
}