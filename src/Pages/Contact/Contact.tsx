import { ContactSectionStyled } from "components/ContactSections/ContactSectionsStyles";
import { RecruitersSection } from "components/ContactSections/RecruiterSection";
import { SocialMediaSection } from "components/ContactSections/SocialMediaSection";

export const Contact = () => {
    return(
        <ContactSectionStyled>
            <SocialMediaSection />
            <RecruitersSection />
        </ContactSectionStyled>
    );
};