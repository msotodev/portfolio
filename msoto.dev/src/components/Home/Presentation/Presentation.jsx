import SocialMedia from "../../Common/SocialMedia/SocialMedia";
import { useTranslation } from 'react-i18next';

export default function Presentation() {
    const { t } = useTranslation();
    
    return (
        <section className="flex flex-col gap-[25px] items-center">
            <article className="flex flex-col gap-[35px] sm:flex-row">
                <div className="flex justify-center align-middle">
                    <img className="w-50 rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-[1.1]" src="/images/Presentation/programmer.png" alt="Avatar" />
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col gap-[10px] text-center sm:text-left">
                        <h1 className="text-3xl font-bold text-[var(--primary-color)]">Mario Soto Moreno</h1>
                        <h2 className="text-[var(--primary-color)] pl-[0px]">{t("career")}</h2>
                        <SocialMedia />
                    </div>
                </div>
            </article>
            <article>
                <p className="text-center text-[var(--primary-color)]">
                    {t("presentation")}
                </p>
            </article>
        </section>
    )
}