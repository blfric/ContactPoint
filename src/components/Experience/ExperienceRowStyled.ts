import { ShowProgressively } from "Styling/keyFrames";
import styled from "styled-components";

export const ExperienceRow = styled.section`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    position: relative;
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
`;