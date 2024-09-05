import { device } from "Styling/sizing";
import styled from "styled-components";

export const AboutMeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${props => props.theme.darkBg};
    color: ${props => props.theme.textWhite};
    scrollbar-width: 0px;
    height: 100vh;

    h1 {
        color: ${props => props.theme.secondary};
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        @media ${device.mobileS} {
            font-size: 22px;
            font-weight: 500;
        }
    }

    @media ${device.tablet} {
        height: auto;
    }
`;

export const AboutMeElement = styled.div<{ $long: number }>`
    margin-top: 15px;
    width: 70%;
    color: ${props => props.theme.textWhite};
    font-size: 17px;
    font-weight: 700;
    text-align: justify;

    @media ${device.mobileL} {
        width: 90%;
        font-size: 14px;
        margin-bottom: 5px;
    }
`;

export const CardsContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    margin: 85px auto;
    flex-wrap: wrap;

    @media ${device.tablet} {
        margin: 45px auto 30px;
    }

    @media ${device.mobileS} {
        margin: 45px auto;
    }
`;

export const CardItem = styled.div`
    width: 25%;
    min-width: 230px;
    display: grid;
    height: 275px;
    border-radius: 4px;
    background: ${props => props.theme.cardBg};
    padding: 5px;
    box-sizing: border-box;
    margin-top: 15px;
    position: relative;
    z-index: 2;
    border-radius: 8px;

    /*&::before {
        position: absolute;
        content: ' ';
        background-color: rgba(151, 151, 151, 0.71);
        display: block;
        height: 100%;
        width: 100%;
        z-index: 1;
    }*/


    @media ${device.tablet} {
        margin: 45px auto 30px;
        width: 80%;
    }

    @media ${device.mobileL} {
        width: 70%;
        min-width: 210px;
        height: 235px;
        margin-top: 35px;
    }

    .info__container {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        z-index: 2;
        width: 100%;
        height: 70%;
        margin-bottom: auto;
    }

    .info__container > label {
        color: ${props => props.theme.titles};
        text-align: center;
        font-size: 20px;
        font-weight: 800;
        line-height: normal;
        margin-top: 15px;

        @media ${device.mobileL} {
            font-size: 18px;
        }
    }

    .info__container > img {
        width: 50px;
        height: 50px;
        object-fit: contain;
        margin: 20px auto 10px auto;
        @media ${device.mobileL} {
            width: 30px;
            margin: 10px auto;
        }
    }

    .info__container > p:nth-of-type(1) {
        color: ${props => props.theme.cardText};
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 80%;
        height: 40%;
        margin: 43px auto 0px;

        @media ${device.mobileL} {
            width: 75%;
            font-size: 13px;
        }
        
        @media ${device.mobileM} {
            font-size: 12px;
        }
        
        @media ${device.tablet} {
            font-size: 14px;
        }

        @media ${device.laptop} {
            font-size: 18px;
        }
    }
    .info__container > p:nth-of-type(2) {
        color: ${props => props.theme.cardText};
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 80%;
        margin: 3px auto 0px;
    }

    .bg__container {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        bottom: 0;
        display: flex;
        justify-content: flex-end;
        align-items: end;
    }

    .bg__container > img{
        width: 100%;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`;