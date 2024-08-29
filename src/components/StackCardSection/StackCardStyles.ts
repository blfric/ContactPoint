import styled from "styled-components";
import { device } from "Styling/sizing";

export const StackCard = styled.section`
    width: 27%;
    height: 370px;
    margin: 20px auto;
    background-color: #555;
    border-radius: 8px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        outline: none;
        transition: all 1s;
        position: absolute;
        border: none !important;
        flex-direction: column;
        box-sizing: border-box;

        :hover{
            outline: none;
            border: none !important;
        }

        h1 {
            font-size: 14px;
        }

        img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
        }
    }

    .relocate-button {
        flex-direction: row;
        position: absolute;
        background-color: transparent;
        background-color: rgb(24 24 27);
        border-radius: 0;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        transform: translateY(-158px);
        transition: all 1s;
        justify-content: space-evenly;

        img {
            width: 35px;
            height: 35px;
        }
    }

    .collapse-section{
        height: 0;
        width: 0;
        opacity: 0;
        position: absolute;
        top: 55px;
        height: calc(100% - 55px);
        transition: 500ms all;
        opacity: 0;
    }

    .collapse-show {
        display: flex;
        opacity: 1;
        width: 100%;
        height: calc(100% - 55px);
        opacity: 1;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        flex-direction: column;
        overflow-y: hidden;
        overflow-x: scroll;
        padding: 20px 25px;
        flex-wrap: wrap;

        p {
            width: 145px;
            font-size: 12px;
            border-bottom: solid 1px #3e4240;
            margin-right: 22px;
            padding: 4px 8px;
        }
        p:nth-child(odd) {
            background-color: transparent;
        }
        p:nth-child(even) {
            background-color: #6e6d6d;
        }
    }





    @media ${device.laptop} {
        width: 30%;
    }
    
    @media ${device.tablet} {
        width: 45%;
    }

    @media ${device.mobileL} {
        width: 90%;
    }

    @media ${device.mobileM} {
        width: 95%;
    }

    @media (max-width: ${device.mobileS}) {
        width: 100%;
    }
`;


export const StackCardSectionStyled = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 20px;
`;