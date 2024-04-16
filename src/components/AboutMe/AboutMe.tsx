import { ReactElement } from "react";
import { AboutMeElement, AboutMeWrapper, CardItem, CardsContainer } from "./AboutMeStyled";
import { useTranslation } from 'react-i18next';
import { CardsInfo } from "./utils";

export const AboutMe = () => {
    const { t } = useTranslation();
    const aboutMeMap: [] = t('aboutMe', { returnObjects: true });
    const cards = CardsInfo();
    return(
        <AboutMeWrapper>
            <h1>{t('titleAM')}</h1>
            {aboutMeMap.map((item: string, index: number): ReactElement => {
                return(
                    <AboutMeElement $long={item.length} key={item.substring(index, 12)}>
                        {item}
                    </AboutMeElement>
                )
            })}
            <CardsContainer>
                {cards.map(card => (
                    <CardItem key={card.title}>
                        <label>{card.title}</label>
                        <img alt={card.title} src={card.icon} />
                        <p>{card.text}</p>
                    </CardItem>
                ))}
            </CardsContainer>
        </AboutMeWrapper>
    )
};