import { device } from "Styling/sizing";
import styled from "styled-components";

export const AboutMeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    scrollbar-width: 0px;

    h1 {
        color: ${props => props.theme.main};
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
`;

export const AboutMeElement = styled.div<{ $long: number }>`
    margin-top: 15px;
    width: 70%;
    color: ${props => props.theme.secondaryText};
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
    border: 1px solid #D9D9D9;
    background: #FFF;
    box-shadow: 3px 4px 6px -2px rgba(151, 151, 151, 0.71);
    padding: 5px;
    box-sizing: border-box;
    margin-top: 15px;

    @media ${device.mobileL} {
        width: 70%;
        min-width: 210px;
        height: 235px;
        margin-top: 35px;
    }

    label {
        color: ${props => props.theme.titles};
        text-align: center;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin-top: 15px;

        @media ${device.mobileL} {
            font-size: 18px;
        }
    }

    img {
        width: 35px;
        height: auto;
        margin: 5px auto;
        @media ${device.mobileL} {
            width: 30px;
            margin: 10px auto;
        }
    }

    p{
        color: ${props => props.theme.secondaryText};
        text-align: center;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        width: 80%;
        margin: 15px auto;

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
`;