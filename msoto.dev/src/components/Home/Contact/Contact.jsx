import IconTitle from "../../Common/IconTitle/IconTitle";
import { useTranslation } from 'react-i18next';

export default function Contact(){
    const { t } = useTranslation();

    return (
        <section className="flex flex-col px-[25px] py-[45px] gap-[25px] items-center bg-[#e2e2e296]">
            <IconTitle icon='/images/technologies/dark/contactme.png'
                    title={t("title-contact-me")} />

            <div className="flex flex-col gap-[15px] text-md">
                <IconTitle icon="/images/technologies/dark/mail.png"
                        title="mariosotomor.dev@gmail.com"
                        isCenter={false}
                        isBold={false}
                        url="mailto:mariosotomor.dev@gmail.com" />

                <IconTitle icon="/images/technologies/dark/phone.png"
                        title="3311395289"
                        isCenter={false}
                        isBold={false}
                        url="tel:3311395289" />
            </div>
        </section>
    )
}