import { GetTechnicalSkills } from '../../../services/TecknicalSkillsService'
import TechnicalSkill from './TechnicalSkill';

export default function TechnicalSkills() {
    const technicalSkills = GetTechnicalSkills();

    return (
        <section className='flex flex-col gap-[45px]'>
            {
                technicalSkills.map(
                    ({title, skills}) => (<TechnicalSkill key={title} title={title} skills={skills} />)
                )
            }
        </section>
    )
}