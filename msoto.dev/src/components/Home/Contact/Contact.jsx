import Link from "../../Common/Form/Link";
import IconTitle from "../../Common/IconTitle/IconTitle";
import { useTranslation } from 'react-i18next';

export default function Contact(){
    const { t } = useTranslation();

    return (
        <section className="flex flex-col px-[25px] py-[45px] gap-[25px] items-center bg-[#e2e2e296]">
            <IconTitle icon='/images/technologies/dark/contactme.png'
                    title={t("title-contact-me")} />

            <div className="flex flex-col lg:flex-row gap-[15px] justify-center items-center text-md">
                <Link text={t("contact-mail")} href="mailto:mariosotomor.dev@gmail.com" image="/src/images/technologies/light/mail.png" />
                <label className="text-[var(--primary-color)]">{t("or")}</label>
                <Link text={t("contact-phone-number")} href="tel:3311395289" image="/src/images/technologies/light/phone.png" />
            </div>
        </section>
    )
}