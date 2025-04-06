import { useTranslation } from 'react-i18next';
import { GetIconUri } from "../../../helpers/IconHelper";
import { useState } from 'react';

export default function Toolbar() {
    const { i18n } = useTranslation();
    const mexicanFlag = GetIconUri("22439", "0000000", 40);
    const unitedStateFlag = GetIconUri("6JVrADr69hMg", "000000", 40);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [flagLang, setFlagLang] = useState(mexicanFlag);
    
    const [isDarkMode, setDarkMode] = useState(prefersDark);

    const handleToggleTheme = (e) => {
        const isChecked = e.target.checked;

        const root = window.document.documentElement;

        if (isChecked) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        setDarkMode(isChecked);
    };

    const handleToggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';

        const flag = i18n.language === 'en' ? mexicanFlag : unitedStateFlag;

        setFlagLang(flag);

        i18n.changeLanguage(newLang);
    };

    return (
        <section className="flex justify-between">
            <button className='cursor-pointer' onClick={handleToggleLanguage}>
                <img src={flagLang} alt="Mexico Flag" />
            </button>

            <label className="inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox"
                    className="sr-only peer"
                    onChange={handleToggleTheme}
                    checked={isDarkMode} />
                <div className="relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-[var(--light-gray)] rounded-full peer dark:bg-[var(--light-gray)] border peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.5px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-[var(--primary-color)]"></div>
                <span className="ms-3 text-sm font-medium text-[var(--primary-color)]"></span>
            </label>
        </section>
    )
}