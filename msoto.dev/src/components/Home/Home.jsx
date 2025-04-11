import Presentation from './Presentation/Presentation'
import Projects from './Projects/Projects'
import TechnicalSkills from './TechnicalSkills/TechnicalSkills'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'
import Toolbar from '../Common/Toolbar/Toolbar'
import SocialMedia from '../Common/SocialMedia/SocialMedia'
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className='max-w-[900px] mx-auto'>
            <div className='sm:mt-[45px] py-[45px] gap-[15px] sm:rounded-t-[10px] flex flex-col bg-[var(--light-gray)]'>
                <header className='px-[15px] pb-[10px] sm:pb-[45px] sm:px-[45px]'>
                    <Toolbar />
                </header>
                <main className='flex flex-col gap-[10px] border-b-1 border-[var(--primary-color)]'>
                    {/* <Menu /> */}
                    <div className='flex flex-col gap-[55px] px-[15px] sm:px-[45px]'>
                        <Presentation />
                        <Experience />
                        <Projects />
                        <TechnicalSkills />
                    </div>
                    <div className='mt-[45px]'>
                        <Contact />
                    </div>
                </main>
                <footer className='flex flex-col gap-[15px] items-center mt-[25px]'>
                    <h1 className="text-[var(--primary-color)]">
                        {t("by")} Mario Soto Moreno
                    </h1>
                    <hr className="text-[lightgray]" />
                    <SocialMedia />
                </footer>
            </div>
        </div>
    )
}