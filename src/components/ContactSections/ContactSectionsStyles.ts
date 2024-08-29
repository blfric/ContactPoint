import styled from "styled-components";
import { LoadingBars } from "Styling/keyFrames";


export const SocialMediaStyled = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    box-sizing: border-box;
    background-color: ${prop => prop.theme.contactBgGeneral};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    > h2 {
        font-size: 24px;
        text-align: center;
        color: ${props => props.theme.secondaryBlue};
        font-weight: 500;
        width: 80%;
        margin: 55px auto 0px;
    }

    > h3 {
        font-size: 20px;
        width: 80%;
        margin: 25px auto 50px;
        color: ${props => props.theme.carouselBg};
        text-align: center;
    }

    > img {
        width: 125px;
        height: auto;
        margin: 75px auto 40px auto;
    }

    .contact__option{
        display: grid;
        grid-template-columns: 1fr 2fr;
        box-sizing: border-box;
        padding: 4px 7px;
        align-items: center;
        width: 50%;
        margin: 0px auto;

        > img {
            width: 30px;
            margin: auto;
        }

        p {
            width: auto;
            color: ${props => props.theme.status};
            margin: 0px 0px 0px 15px;
            font-size: 20px;
            padding: 10px;
            text-align: start;
        }
    }
`;

export const RecruitersSectionStyled = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    box-sizing: border-box;
    background-color: ${props => props.theme.contactBgRecruiter};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    
    h2 {
        font-size: 24px;
        text-align: center;
        color: ${props => props.theme.secondaryBlue};
        font-weight: 600;
        width: 80%;
        margin: 55px auto 0px;
    }

    h3 {
        font-size: 20px;
        text-align: center;
        font-weight: 600;
        width: 80%;
        margin: 15px auto;
        color: ${props => props.theme.carouselBg};

        span {
            font-weight: 400;
            color: ${props => props.theme.status};
        }
    }

    > img {
        width: 125px;
        height: auto;
        margin: 75px auto 40px auto;
    }

    input {
        width: 65%;
        margin: 20px auto 10px;
        padding: 12px 8px;
        background-color: aliceblue;
        border-radius: 8px;
        color: #010101;
        border: none;
        outline: none;
        font-size: 16px;
    }

    label {
        font-size: 14px;
        color: ${props => props.theme.status};
        width: 50%;
        margin: 0px auto;
        text-align: center;
    }

    .result__sending {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > img {
            width: 126px;
            margin: 45px auto 20px;
        }

        p{
            font-size: 16px;
            margin: 0;
            color: ${props => props.theme.textWhite};
        }

        span {
            font-size: 12px;
            color: ${props => props.theme.warning};
        }
    }

    .loading__element {
        width: 300px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 30px auto 0px;
    }

    .loading__bar {
        width: 20px;
        height: 10px;
        margin: 0 5px;
        background-color: #3498db;
        border-radius: 5px;
        animation: ${LoadingBars} 1s ease-in-out infinite;
    }

    .loading__bar:nth-child(2) {
    animation-delay: 0.1s;
    }

    .loading__bar:nth-child(3) {
    animation-delay: 0.2s;
    }

    .loading__bar:nth-child(4) {
    animation-delay: 0.3s;
    }

`;

export const ContactSectionStyled = styled.section`
    width: 80%;
    box-sizing: border-box;
    padding: 25px 40px;
    display: flex;
    flex-wrap: nowrap;
    min-height: calc(100vh - 75px);
    margin: auto;

`;