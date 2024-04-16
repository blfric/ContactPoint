import { device } from "Styling/sizing";
import styled from "styled-components";

export const NavBarStyled = styled.nav<{ $openMenu: boolean }>`
    width: 100%;
    height: 75px;
    background-color: ${props => props.theme.main};
    padding: 5px 12px;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    position: relative;
    @media ${device.tablet} {
        overflow: ${props => props.$openMenu ? '' : 'hidden'};
        justify-content: flex-end;
    }

    .go__home {
        cursor: pointer;
        margin-right: auto;
        margin-left: 15px;
        color: ${props => props.theme.textWhite};
        @media ${device.tablet} {
            font-size: 14px;
            display: none;
        }
    }

    .go__link {
        cursor: pointer;
        margin: 0px 12px;
        color: ${props => props.theme.textWhite};

        @media ${device.tablet} {
            font-size: 18px;
            padding: 18px 5px;
            margin: 10px auto;
            width: 80%;
            border-bottom: 1px solid rgba(82, 209, 220, .5);
        }
    }
`;

export const NavIcon = styled.img`
    margin-left: 15px;
    margin-right: auto;
    width: 55px;
    height: auto;
    margin-bottom: 5px;
    filter: grayscale(1);
    transition: all 1s;

    &:hover{
        filter: grayscale(0);
    }
`;

export const HandleInt = styled.div<{$show? : boolean}>`
    margin: 0px 20px;
    display: flex;
    margin-right: 35px;

    @media ${device.tablet} {
        margin-top: 40px;
        padding: 14px 38px;
    }

    label > img {
        transition: all .25s ease-out;
        transform: ${props => props.$show ? 'rotate(180deg)' : 'rotate(0deg)'};
        margin-left: 5px;
        @media ${device.tablet} {
            width: 15px;
            margin-left: 8px;
        }
    }

    label {
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        color: ${props => props.theme.textWhite};
        margin-right: 15px;
        @media ${device.tablet} {
            font-size: 15px;
            margin-right: 5px;
        }
    }

    img {
        @media ${device.tablet} {
            width: 30px;
            margin-left: 5px;
        }
    }
`;

export const SelectOptions = styled.section<{$show?: boolean}>`
    display: flex;
    position: absolute;
    left: -4px;
    flex-direction: column;
    top: 40px;
    background: ${props => props.theme.whiteColor};
    color: ${props => props.theme.titles};
    height: ${props => props.$show ? '95px' : '0px' };
    width: 100px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all .2s ease-out;
    z-index: 5;

    span {
        cursor: pointer;
        display: inline-block;
        margin: 5px 0px;
        width: 100%;
        text-align: center;
        padding: 4px 0px;
        font-weight: 600;
    }

    span::after {
        display: block;
        content: ' ';
        border-bottom: solid 1px ${prps => prps.theme.titles};  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
        margin-top: 4px;
    }

    span:hover::after {
        transform: scaleX(1);
    }
`;

export const ResponsiveMenu = styled.div<{ $openMenu: boolean }>`
    display: flex;
    width: auto;

    .res__go__link {
        padding: 15px 24px;
        width: 70%;
        margin: 15px auto;
        color: ${props => props.theme.textWhite};
        font-size: 20px;
        font-weight: 500;
        border-bottom: solid 1px ${props => props.theme.secondary};
        cursor: pointer;
    }

    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        width: 55vw;
        background-color: ${props => props.theme.main};
        height: 60vh;
        position: absolute;
        top: 75px;
        right: ${props => props.$openMenu ? '0px' : '-45vw'};
        border: solid 1px ${props => props.theme.secondary};
        transition: all .5s ease;
    }

    @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
        width: 100vw;
        background-color: ${props => props.theme.main};
        height: 100vh;
        position: absolute;
        top: 75px;
        right: ${props => props.$openMenu ? '0' : ''};
        border: solid 1px ${props => props.theme.secondary};
        transition: all .5s ease-in-out;
    }

`;

export const HamburguerButton = styled.button<{ $openMenu: boolean }>`
    background-color: transparent;
    border: none;
    margin-right: ${props => props.$openMenu ? '5px' : '8px'};
    margin-left: ${props => props.$openMenu ? '8px' : '0px'};
    display: none;
    justify-content: ${props => props.$openMenu ? 'center' : 'space-evenly'};
    align-items: ${props => props.$openMenu ? 'center' : 'flex-start'};
    width: ${props => props.$openMenu ? '25px' : '30px'};
    height: ${props => props.$openMenu ? '25px' : '30px'};
    transition: all .2s ease;
    flex-direction: column;
    padding: 0;
    position: relative;
    outline: none;

    &:focus {
        outline: none;
    }

    @media ${device.tablet} {
        display: flex;
    }
    @media ${device.mobileL} {
        margin-right: 25px;
    }
    img {
        width: 90%;
        height: 90%;
    }
    span:nth-child(1) {
        width: ${props => props.$openMenu ? '80%' : '90%'};
        height: 2px;
        background-color: ${props => props.theme.secondary};
        align-self: ${props => props.$openMenu ? 'center' : 'flex-end'};
        transition: all .25s ease-in;
        transform: ${props => props.$openMenu ? 'rotate(50deg)' : 'rotate(0deg)'};
        position: ${props => props.$openMenu ? 'absolute' : 'normal'};
    }
    span:nth-child(2) {
        width: ${props => props.$openMenu ? '80%' : '90%'};
        height: 2px;
        background-color: ${props => props.theme.secondary};
        align-self: ${props => props.$openMenu ? 'center' : 'flex-start'};
        transition: all .25s ease-in;
        transform: ${props => props.$openMenu ? 'rotate(-50deg)' : 'rotate(1deg)'};
        position: ${props => props.$openMenu ? 'absolute' : 'normal'};
    }
`;