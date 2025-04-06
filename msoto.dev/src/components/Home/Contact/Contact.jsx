import IconTitle from "../../Common/IconTitle/IconTitle";
import { useTranslation } from 'react-i18next';

export default function Contact(){
    const { t } = useTranslation();

    return (
        <section className="flex flex-col px-[25px] py-[45px] gap-[25px] items-center bg-[#e2e2e296]">
            <IconTitle icon='https://img.icons8.com/?size=35&id=7819&format=png&color=2e0427'
                    title={t("title-contact-me")} />

            <div className="flex flex-col gap-[15px] text-md">
                <IconTitle icon="https://img.icons8.com/?size=35&id=Y2GfpkgYNp42&format=png&color=2e0427"
                        title="mariosotomor.dev@gmail.com"
                        isCenter={false}
                        isBold={false}
                        url="mailto:mariosotomor.dev@gmail.com" />

                <IconTitle icon="https://img.icons8.com/?size=35&id=78384&format=png&color=2e0427"
                        title="3311395289"
                        isCenter={false}
                        isBold={false}
                        url="tel:3311395289" />
            </div>
        </section>
    )
}