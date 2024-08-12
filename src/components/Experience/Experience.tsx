import { CompaniesCollection } from "./utils";
import { ExperienceRowComponent } from "./ExperienceRow";
import { ExperienceComponent } from "./ExperienceRowStyled";
import { useTranslation } from "react-i18next";

const Experience = () => {
    const { t } = useTranslation();
    return(
        <ExperienceComponent>
            <h1>{t('ExperienceTitle')}</h1>
            {
                CompaniesCollection.map(company => (
                    <ExperienceRowComponent key={company} keyJob={company} />
                ))
            }
        </ExperienceComponent>
    )
};

export default Experience;