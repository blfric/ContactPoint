import { RemoveCover, blinkBox } from "Styling/keyFrames";
import { device } from "Styling/sizing";
import styled from "styled-components";

export const WelcomeWrapper = styled.section`
    display: flex;
    width: 100%;
    height: calc(100vh - 75px);
    min-height: 650px;
    position: relative;
    overflow: hidden;
    background-color: ${props => props.theme.main};
    padding: 75px 65px;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: flex-start;

    @media ${device.laptop} {
        width: 100%;
        padding: 65px 55px;
    }
    
    @media ${device.tablet} {
        padding: 55px 45px;
        height: auto;
    }

    @media ${device.mobileL} {
        padding: 15px 30px;
        flex-direction: column;
        height: auto;
    }
`;

export const HeroText = styled.div`
    display: flex;
    width: 60%;
    height: 100%;
    background-color: transparent;
    flex-direction: column;
    position: relative;

    > h1 {
        font-size: 24px;
        font-family: Oswald, sans-serif;
        font-weight: 200;
        color: ${props => props.theme.textWhite};
        margin: 0 0 10px 0;
        padding: 0;
    }

    > h2 {
        font-size: 20px;
        font-family: Oswald, sans-serif;
        font-weight: ${props => props.theme.subTitleWeight};
        color: ${props => props.theme.secondaryBlue};
        margin: 0;
        padding: 0;
    }

    > h3 {
        font-size: 45px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 200;
        color: ${props => props.theme.textWhite};
        padding-right: 75px;
        box-sizing: border-box;
    }
    
    @media ${device.tablet} {
        width: 100%;
        height: auto;
    }

    @media ${device.mobileL} {
        padding: 25px 5px;
        flex-direction: column;
        height: auto;
    }
`;

export const SectionCover = styled.div`
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 0%;
    height: 0%;
    background-color: ${props => props.theme.main};
    transition: all 1s;
    animation: ${RemoveCover} 6s;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    > span {
        width: 22px;
        height: 5px;
        animation: ${props => blinkBox(props.theme.secondaryBlue)} 3s;
    }
`;
