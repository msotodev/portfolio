import { useTranslation } from 'react-i18next';

export function GetWorkExperiences(){
    const { t } = useTranslation();

    return [
        {
            title: t("experience-intecproof-title"),
            companyName: "Intecproof",
            date: t("experience-intecproof-date"),
            description: t("experience-intecproof-description"),
        },
        {
            title: t("experience-bovedacreativa-title"),
            companyName: "Boveda Creativa",
            date: t("experience-bovedacreativa-date"),
            description: t("experience-bovedacreativa-description"),
        }
    ]
}