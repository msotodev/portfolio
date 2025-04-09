import { useParams } from 'react-router-dom'
import { GetProjectById } from '../../../../services/projectService';
import Toolbar from '../../../Common/Toolbar/Toolbar'
import { IconList } from "../../../Common/IconList/IconList";
import { useTranslation } from 'react-i18next';

export default function ProjectDetail() {
    const { t } = useTranslation();
    const { id } = useParams();
    const { title, image, description, tools } = GetProjectById(id, false);

    return (
        <div className='max-w-[900px] mx-auto'>
            <section className='sm:mt-[45px] py-[45px] gap-[45px] sm:rounded-t-[10px] flex flex-col bg-[var(--light-gray)]'>
                <Toolbar />
                <div className='flex flex-col sm:flex-row items-center px-[15px] sm:px-[45px]'>
                    <img title={title}
                         className="w-[100px]"
                         src={image}
                         alt={title} />
                    
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[var(--primary-text-color)]'>{title}</h1>
                        <p className='text-[var(--primary-text-color)]'>{description}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[15px] px-[15px] sm:px-[45px]'>
                    <h1 className='text-[var(--primary-text-color)]'>{t("used-technologies")}</h1>
                    
                    <IconList icons={tools} />
                </div>
            </section>
        </div>
    )
}