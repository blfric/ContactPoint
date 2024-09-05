import styled from "styled-components";
import { device } from "Styling/sizing";

export const CarouselSection = styled.section`
    width: 27.5%;
    height: 70%;
    margin: 10px auto;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: transparent;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.carouselBg};
    border-radius: 6px;
    
    @media ${device.tablet} {
        width: 90%;
        height: 90%;
        flex-direction: row;
    }

    @media ${device.mobileL} {
        width: 85%;
        padding: 15px 30px;
        flex-direction: column;
        height: 55vh;
        padding: 0;
        margin-bottom: 80px;
    }
`;

export const CarouselItem = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;

    h3 {
        width: 100%;
        text-align: center;
        color: ${props => props.theme.carouselText};
        font-size: 34px;
    }

    img {
        width: 192px;
        height: 192px;
        margin-top: 70px
    }

    @media ${device.tablet} {
        h3 {
            font-size: 30px;
        }

        img {
            width: 150px;
            height: auto;
        }
    }

    @media ${device.mobileL} {
        h3 {
            font-size: 27px;
        }

        img {
            width: 140px;
            height: auto;
        }
    }
`;