import Presentation from './Presentation/Presentation'
import Projects from './Projects/Projects'
import TechnicalSkills from './TechnicalSkills/TechnicalSkills'
import Contact from './Contact/Contact'
import Toolbar from '../Common/Toolbar/Toolbar'
import IconTitle from '../Common/IconTitle/IconTitle'
import SocialMedia from '../Common/SocialMedia/SocialMedia'

export default function Home() {
    return (
        <div className='max-w-[900px] mx-auto py-[45px] flex flex-col bg-[var(--light-gray)] rounded-t-[10px]'>
            <header className='p-[45px]'>
                <Toolbar />
            </header>
            <main className='flex flex-col'>
                <div className='flex flex-col gap-[45px] px-[15px] sm:px-[45px]'>
                    <Presentation />
                    <IconTitle icon='https://img.icons8.com/?size=35&id=rt7E3Z37UZuZ&format=png&color=2e0427'
                            title='Projects' />
                    <Projects />
                    <IconTitle icon='https://img.icons8.com/?size=35&id=100041&format=png&color=2e0427'
                            title='Technical Skills' />
                    <TechnicalSkills />
                </div>
                <div className='mt-[45px]'>
                    <Contact />
                </div>
            </main>
            <footer className='flex flex-col gap-[15px] items-center mt-[25px]'>
                <h1 className="text-[var(--primary-color)]">
                    Por Mario Soto Moreno
                </h1>
                <hr className="text-[lightgray]" />
                <SocialMedia />
            </footer>
        </div>
    )
}