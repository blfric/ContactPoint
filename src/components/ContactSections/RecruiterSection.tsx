import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import RecruiterLogo from "assets/openToWork.png";
import { RecruitersSectionStyled } from "./ContactSectionsStyles";
import EmailSent from "assets/emailSent.png";
import EmailSentError from "assets/networkError.png";

export const RecruitersSection = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [state, setState] = useState({
        isLoading: false,
        successSending: false,
        errorSeding: true
    });

    const handleEmail = (e : ChangeEvent<HTMLInputElement>) => {
        const {target: { value }} = e;
        setEmail(value);
    };

    const { isLoading, successSending, errorSeding } = state;

    return(
        <RecruitersSectionStyled>
            <h2>{t('recruiterTitle')}</h2>
            <img src={RecruiterLogo} alt="" />
            <h3>{t('statusJob')}<span>{t('statusJobDetail')}</span></h3>
            {(!isLoading && !successSending && !errorSeding) && <>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    placeholder={t('emailPlaceholder')}
                />
                <label>{t('emailSending')}</label>
            </>}
            {(!isLoading && successSending) &&
                <div className="result__sending">
                    <img src={EmailSent} alt="Email sent succesfully"/>
                    <p>{t('emailSendingSuccess')}</p>
                    <span>{t('emailSendingWarning')}</span>
                </div>
            }
            {(!isLoading && errorSeding) &&
                <div className="result__sending">
                    <img src={EmailSentError} alt="Error sending email"/>
                    <p>{t('emailSendingError')}</p>
                </div>
            }
            {
                isLoading && <div className="loading__element">
                    <div className="loading__bar"></div>
                    <div className="loading__bar"></div>
                    <div className="loading__bar"></div>
                    <div className="loading__bar"></div>
                </div>
            }
        </RecruitersSectionStyled>
  )
}