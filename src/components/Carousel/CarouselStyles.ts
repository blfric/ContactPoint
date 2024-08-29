import styled from "styled-components";

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
`;