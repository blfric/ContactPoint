import styled from "styled-components";

export const FooterComponent = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: #03060c;
    box-sizing: border-box;
    flex-direction: column;
    height: 240px;


    .logo {
        padding: 15px 30px;
    }

    .footer__links {
        width: 100%;
        display: flex;
        height: 60%;
        margin-top: 30px;
    }

    .links__section {
        width: 70%;
        padding: 20px;
        box-sizing: border-box;
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .links__website {
        display: flex;
        justify-content: space-evenly;
        width: 80%;
    }

    .links__website a {
        color: #eee;
        font-size: 14px;
        border-bottom: 1px solid ${props => props.theme.secondary};
        width: auto;
        padding-top: 8px;
        padding: 6px 10px;
    }

    .link__item {
        display: flex;
        flex-direction: column;
        width: 30%;
        align-items: center;
    }

    .link__item p{
        width: 75%;
        font-size: 12px;
        text-align: center;
    }

    .copy__rights{
        width: 100%;
        height: 35px;
        font-size: 11px;
        background-color: #111111;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: auto;
    }
    .copy__rights p {
        margin: 0;
        padding: 0;
    }

    .social__links{
        width: 30%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 10px 25px;
        box-sizing: border-box;
    }

    .social__icon{
        width: 30px;
        height: 30px;
        background-color: #eee;
        margin: auto 10px;
        padding: 6px;
        border-radius: 8px;
    }

`;