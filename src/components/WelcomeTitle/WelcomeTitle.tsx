import { CarouselItem, CarouselSection, HeroText, SectionCover, WelcomeWrapper } from "./WelcomeTitleStyles";
import { useTranslation } from 'react-i18next';
import { ImageCarousel } from "./utils";

export const WelcomeTitle = () => {
    const { t } = useTranslation();
    return(
        <WelcomeWrapper>
            <HeroText>
                <h1>{`${t('name').toUpperCase()} ${t('lastName').toUpperCase()}`}</h1>
                <h2>{t('webDev').toUpperCase()}</h2>
                <h3>{t('heroText')}</h3>
                <SectionCover>
                    <span></span>
                </SectionCover>
            </HeroText>
            <CarouselSection>
                {ImageCarousel.map(image => {
                    return <CarouselItem $bgImage={image.src} />
                })}
            </CarouselSection>
        </WelcomeWrapper>
    )
};