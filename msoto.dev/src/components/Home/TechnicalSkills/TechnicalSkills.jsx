import { useTranslation } from 'react-i18next';
import { GetTechnicalSkills } from '../../../services/TecknicalSkillsService'
import TechnicalSkill from './TechnicalSkill';
import IconTitle from '../../Common/IconTitle/IconTitle'
import { GetBasePathByThemeSelected } from '../../../helpers/ImagesHelper';

export default function TechnicalSkills() {
    const { t } = useTranslation();
    const technicalSkills = GetTechnicalSkills();
    const path = GetBasePathByThemeSelected();

    return (
        <>
            <IconTitle icon={`${path}skill.png`}
                       title={t("title-skills")} />
            <section className='flex flex-col gap-[45px]'>
                {
                    technicalSkills.map(
                        ({title, skills}) => (<TechnicalSkill key={title} title={title} skills={skills} />)
                    )
                }
            </section>
        </>
    )
}