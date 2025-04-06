import { GetIconUri } from '../../../helpers/IconHelper';
import { IconList } from '../../Common/IconList/IconList';
import { useTranslation } from 'react-i18next';

export default function TechnicalSkills() {
    const programmingLangauages = GetProgrammingLangauages();
    const frameworks = GetFrameworks();
    const databases = GetDatabases();
    const frontTechnologies = GetFrontTechnologies();
    const { t } = useTranslation();

    return (
        <section className='flex flex-col gap-[25px]'>
            <article className='flex flex-col gap-[25px]'>
                <h3 className="text-2xl text-center font-semibold text-[var(--primary-color)]">
                    {t("subtitle-programming-lang")}
                </h3>
                <div className='flex justify-center items-center'>
                    <IconList icons={programmingLangauages} />
                </div>
            </article>
            <article className='flex flex-col gap-[25px]'>
                <h3 className="text-2xl text-center font-semibold text-[var(--primary-color)]">
                    {t("subtitle-frameworks")}
                </h3>
                <div className='flex justify-center items-center'>
                    <IconList icons={frameworks} />
                </div>
            </article>
            <article className='flex flex-col gap-[25px]'>
                <h3 className="text-2xl text-center font-semibold text-[var(--primary-color)]">
                    {t("subtitle-databases")}
                </h3>
                <div className='flex justify-center items-center'>
                    <IconList icons={databases} />
                </div>
            </article>
            <article className='flex flex-col gap-[25px]'>
                <h3 className="text-2xl text-center font-semibold text-[var(--primary-color)]">
                    {t("subtitle-frontend")}
                </h3>
                <div className='flex justify-center items-center'>
                    <IconList icons={frontTechnologies} />
                </div>
            </article>
        </section>
    )
}

function GetProgrammingLangauages() {
    const color = "2e0427";

    return [
        {
            title: "C#",
            icon_url: GetIconUri("55205", color)
        },
        {
            title: "Type Script",
            icon_url: GetIconUri("cHBUT9SmrD2V", color)
        },
        {
            title: "JavaScript",
            icon_url: GetIconUri("39854", color)
        },
        {
            title: "Php",
            icon_url: GetIconUri("10232", color)
        },
        {
            title: "Python",
            icon_url: GetIconUri("12592", color)
        }
    ];
}

function GetFrameworks(){
    const color = "2e0427";

    return [
        {
            title: "React",
            icon_url: GetIconUri("35989", color)
        },
        {
            title: "Xamarin Froms",
            icon_url: GetIconUri("35116", color)
        },
        {
            title: "ASP.NET MVC",
            icon_url: GetIconUri("3756", color)
        }
    ]; 
}

function GetDatabases(){
    const color = "2e0427";

    return [
        {
            title: "SQL Server",
            icon_url: GetIconUri("10429", color)
        },
        {
            title: "MySQL",
            icon_url: GetIconUri("11625", color)
        },
        {
            title: "SQLite",
            icon_url: GetIconUri("yjSayFwWHyCo", color)
        },
        {
            title: "Postgre",
            icon_url: GetIconUri("t5TTHGlH3oxb", color)
        }
    ]
}

function GetFrontTechnologies(){
    const color = "2e0427";

    return [
        {
            title: "HTML",
            icon_url: GetIconUri("10246", color)
        },
        {
            title: "CSS",
            icon_url: GetIconUri("10236", color)
        },
        {
            title: "Tailwind",
            icon_url: GetIconUri("UpSCHTwpywad", color)
        },
        {
            title: "Bootstrap",
            icon_url: GetIconUri("OODqBWCdRF8o", color)
        },
    ]
}