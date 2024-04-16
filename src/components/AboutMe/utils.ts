import { useTranslation } from "react-i18next";
import LocationIcon from 'assets/locationIcon.png';
import DegreeIcon from 'assets/degreeIcon.png';
import LngIcon from 'assets/intIcon.png';

export type CardOptions = {
    title: string;
    icon: string;
    text: string;
}

export const CardsInfo = (): CardOptions[] => {
    const { t } = useTranslation();
    const cardsOptions = [
        {
            title: t('address'),
            icon: LocationIcon,
            text: t('currentAddress')
        },
        {
            title: t('degree'),
            icon: DegreeIcon,
            text: `${t('itEngineer')} \n ${t('softwareDev')}` 
        },
        {
            title: t('languages'),
            icon: LngIcon,
            text: `${t('spanish')}  ${t('native')} \n ${t('english')} ${t('bLevel')}` 
        }
    ];
    return cardsOptions;
}