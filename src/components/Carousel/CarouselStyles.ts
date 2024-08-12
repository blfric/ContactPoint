import styled from "styled-components";

export const CarouselSection = styled.section`
    width: 30%;
    height: 100%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: transparent;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
`;

export const CarouselItem = styled.div<{ $bgImage: string }>`
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.$bgImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;