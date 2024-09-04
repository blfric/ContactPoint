import { useTranslation } from "react-i18next";
import { StackCard } from "./StackCardStyles"
import { CardStackTypes } from "./utils";
import { useState } from "react";

export const StackCardItem = (data: CardStackTypes) => {
    const [collapse, toggleColapse] = useState(false);
    const { t } = useTranslation();

    return(
        <StackCard>
            <button className={`button-card ${collapse && 'relocate-button'}`} onClick={() =>toggleColapse(prev => !prev)}>
                <h1>{t(data.cardName)}</h1>
                <img src={data.urlIcon} alt={data.cardName}/>
            </button>
            <div className={`collapse-section ${collapse && 'collapse-show'}`}>
                {data.elements.map(item => <p key={item}>{item}</p>)}
            </div>
        </StackCard>
    )
}