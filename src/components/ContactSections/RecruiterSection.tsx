import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import RecruiterLogo from "assets/openToWork.png";
import { RecruitersSectionStyled } from "./ContactSectionsStyles";
import EmailSent from "assets/emailSent.png";
import EmailSentError from "assets/networkError.png";
import { sendResumeService } from "firebase/cloudFunctions";
import { HttpsCallableResult } from "firebase/functions";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateEmail(email: string): boolean {
    return emailRegex.test(email);
}

export const RecruitersSection = () => {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [state, setState] = useState({
        isLoading: false,
        successSending: false,
        errorSeding: false
    });
    const [error, setError] = useState('');

    const handleEmail = (e : ChangeEvent<HTMLInputElement>) => {
        const {target: { value }} = e;
        setEmail(value);
    };

    const sendResume = () => {
        setState(prev => ({
            ...prev,
            isLoading: true
        }));
        if (validateEmail(email)) {
            const lang = i18n.language
            sendResumeService({ email, lang}).then((res: HttpsCallableResult) => {
                if(res.data !== 'Resume sent successfully') {
                    setState(prev => ({
                        ...prev,
                        isLoading: false,
                        successSending: true,
                        errorSeding: false
                    }));
                }else {
                    setState(prev => ({
                        ...prev,
                        isLoading: false,
                        successSending: false,
                        errorSeding: true
                    }));
                }
                setState(prev => ({
                    ...prev,
                    isLoading: false,
                    successSending: true,
                    errorSeding: false
                }));
            }).catch(err => {
                setState(prev => ({
                    ...prev,
                    isLoading: false,
                    successSending: false,
                    errorSeding: true
                }));
            });
        } else {
            let error;
            if(email === ""){
                error = t('emailRequired');
            } else {
                error = t('emailWrong');
            }
            setError(error);
            setState(prev => ({
                ...prev,
                isLoading: false,
                successSending: false,
                errorSeding: false
            }));
        }
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
                {error !== "" && <span>{error}</span>}
                <button onClick={sendResume}>{t('emailButtonText')}</button>
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