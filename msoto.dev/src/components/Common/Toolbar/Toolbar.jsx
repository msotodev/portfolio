import { useTranslation } from 'react-i18next';
import MexicanFlag from '@/languages/flags/mexico.png';
import UsaFlag from '@/languages/flags/usa.png';
import { useState, useContext } from 'react';
import { ThemeContext } from "../../../poviders/ThemeProvider";

export default function Toolbar() {
    const { i18n } = useTranslation();
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [flagLang, setFlagLang] = useState(UsaFlag);
    
    const handleToggleLanguage = () => {
        const language = i18n.language;
        const newLang = language === 'en' ? 'es' : 'en';
        const flag = language === 'en' ? MexicanFlag : UsaFlag;

        setFlagLang(flag);

        localStorage.setItem("language", language);

        i18n.changeLanguage(newLang);
    };

    return (
        <section className="flex justify-between items-center">
            <button className='cursor-pointer px-[5px]' onClick={handleToggleLanguage}>
                <img src={flagLang} alt="Country Flag" />
            </button>

            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox"
                       className="sr-only peer ouline-none"
                       onChange={toggleTheme}
                       checked={isDarkMode} />
                <div className="relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-[var(--light-gray)] rounded-full peer dark:bg-[var(--light-gray)] border peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.5px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-[var(--primary-color)]"></div>
                <span className="ms-3 text-sm font-medium text-[var(--primary-color)] outline-none"></span>
            </label>
        </section>
    )
}