import { ShowProgressively } from "Styling/keyFrames";
import { device } from "Styling/sizing";
import styled from "styled-components";

export const ExperienceComponent = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    box-sizing: border-box;
    flex-direction: column;
    background: ${props => props.theme.main};
    color: ${props => props.theme.textWhite};
    min-height: 100vh;

    h1 {
        color: ${props => props.theme.secondary};
        font-size: 24px;
        margin: 20px auto 50px;
    }

    @media ${device.tablet} {
        height: auto;
        min-height: auto;

        h1 {
            width: 80%;
            font-size: 22px;
            text-align: center;
            margin: 50px auto 50px;
        }
    }
`;

export const ExperienceRow = styled.section`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    height: 16%;


    @media ${device.tablet} {
        flex-direction: column;
    }
`;

export const LogoSection = styled.div<{ $bgColor: string, $show: boolean }>`
    background-color: ${props => props.$bgColor};
    height: 100%;
    min-height: ${props => props.$show ? '555px' : '125px'};
    width: ${props => props.$show ? '30%' : '100%'};
    display: flex;
    transition: all 1s;
    justify-content: center;
    align-items: center;
    clip-path: polygon(${props => props.$show ? '0 0, 100% 0%, 24% 100%, 0% 100%' : '0 0, 100% 0, 100% 100%, 0% 100%'});
    
    > img {
        cursor: pointer;
        width: 125px;
        height: fit-content;
        margin-left: ${prop => prop.$show ? '-24px' : '0px'};
        margin-bottom: ${prop => prop.$show ? '335px' : '0px'};
        transition: all 1s;
    }


    @media ${device.tablet} {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        min-height: 125px;
        width: 100%;

        h1 {
            width: 80%;
            font-size: 22px;
            text-align: center;
            margin: 50px auto 50px;
        }

        > img {
            margin-left: 0px;
            margin-bottom: 0px;
        }
    }
`;


export const CollapseSection = styled.div<{ $show: boolean }>`
    width: 70%;
    display: ${props => props.$show ? 'flex' : 'none'};
    position: ${props => props.$show ? 'absolute' : 'relative'};
    left: ${props => props.$show ? '28%' : 'relative'};
    animation: ${ShowProgressively} 3s;
    max-height: 555px;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
    flex-direction: column;
    transition: all 1ms;

    > span {
        font-size: 16px;
        color: ${props => props.theme.purple};
        font-weight: 800;
    }

    > p {
        margin: 2px auto 0px 30px;
        width: calc(100% - 35px);
        text-align: start;
        font-size: 14px;
        font-weight: 800;
        
        > label {
            width: 100%;
            text-align: start;
            font-size: 14px;
            color: ${props => props.theme.titles};
            font-weight: 800;
        }
    }

    @media ${device.tablet} {
        width: 100%;
        left: 0;
        position: relative;
        padding: 35px 15px;
        box-sizing: border-box;
        max-height: 1000px;
    }
`;