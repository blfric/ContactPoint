import { StackCardItem } from "./StackCard";
import { StackCardSectionStyled } from "./StackCardStyles"
import { StackCards } from "./utils";

export const StackCardsSection = () => {
    return(
        <StackCardSectionStyled>
            {StackCards.map(stack => (<StackCardItem key={stack.cardName} {...stack}/>))}
        </StackCardSectionStyled>
    )
};