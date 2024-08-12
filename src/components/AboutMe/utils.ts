import { useTranslation } from "react-i18next";
import LocationIcon from 'assets/locationIcon.png';
import DegreeIcon from 'assets/degreeIcon.png';
import LngIcon from 'assets/intIcon.png';
import WaveImage from 'assets/waves_01';

export type CardOptions = {
    title: string;
    icon: string;
    text: string | string[];
    bgImage: string;
    id: string;
}

export const CardsInfo = (): CardOptions[] => {
    const { t } = useTranslation();
    const cardsOptions = [
        {
            title: t('address'),
            icon: LocationIcon,
            text: t('currentAddress'),
            bgImage: WaveImage(),
            id: 'fe52ab980342'
        },
        {
            title: t('degree'),
            icon: DegreeIcon,
            text: [t('itEngineer'), t('softwareDev')],
            bgImage: WaveImage(),
            id: '8d52f7d0393c'
        },
        {
            title: t('languages'),
            icon: LngIcon,
            text: [`${t('spanish')} - ${t('native')}`, `${t('english')} - ${t('bLevel')}`],
            bgImage: WaveImage(),
            id: '0a1a9b47d883'
        }
    ];
    return cardsOptions;
}