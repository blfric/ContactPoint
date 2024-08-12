import { useTranslation } from "react-i18next";
import { ExperienceRow, LogoSection, CollapseSection } from "./ExperienceRowStyled";
import { Companies, companyLogos } from "./utils";
import { useState } from "react";

export type CompanyDataItem = {
    label: string | number;
    data: string | number| Date;
    link?: Boolean;
    labelLink?: string;
    href?: string;
}

export type CompanyData = {
    bunkerMc: CompanyDataItem[],
    laPieza: CompanyDataItem[],
    fonYou: CompanyDataItem[],
    goNet:  CompanyDataItem[]
}

export type ExperienceRowOptions = {
    keyJob: Companies
}

export const  ExperienceRowComponent = ({ keyJob = 'laPieza' }: ExperienceRowOptions): JSX.Element => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const data: CompanyData = t('experiences', { returnObjects: true });
    const { logo, bgColor } = companyLogos[keyJob];
    const experienceItems = data[keyJob];
    return(
        <ExperienceRow>
            <LogoSection $bgColor={bgColor} $show={open}>
                <img alt={keyJob} src={logo} onClick={() => setOpen(prevState => (!prevState))}/>
            </LogoSection>
            <CollapseSection $show={open}>
                <span>{`{`}</span>
                {experienceItems.map(item => {
                    if(item.link) {
                        return(<p key={item.href}>
                            <label>{item.label}:</label>
                            <a target="blank" href={item.href}>{` ${item.labelLink}`}</a>
                        </p>);
                    }
                    return(<p key={item.label}><label>{item.label}:</label>{` ${item.data}`}</p>);
                })}
                <span>{`}`}</span>
            </CollapseSection>
        </ExperienceRow>
    );
}