import { useTranslation } from "react-i18next";
import { SocialMediaStyled } from "./ContactSectionsStyles";
import { footerSocials } from "components/Navbar";
import GeneralLogo from "assets/collavorative.png";
import { renderSocialItem } from "components/Footer";

export const SocialMediaSection = () => {
    const { t } = useTranslation();

    return(
        <SocialMediaStyled>
            <h2>{t('contactTitleGeneral')}</h2>
            <img src={GeneralLogo} alt="collaboration logo"/>

            <h3>{t('contactText')}</h3>
            {footerSocials.map(item => {
                const {alt, src, type} = item;
                return(
                    renderSocialItem(item,
                    <div className="contact__option">
                        <img src={src} alt={alt} />
                        <p>{t(type)}</p>
                    </div>)
                )
            })}
        </SocialMediaStyled>
    );
};