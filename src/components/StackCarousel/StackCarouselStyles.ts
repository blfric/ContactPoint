import { SlideCarousel } from "Styling/keyFrames";
import styled from "styled-components";

export const StackCarouselSection = styled.section`
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    padding: 50px 20px;

    .slide-logos {
        white-space: nowrap;
        animation: ${SlideCarousel} 25s infinite linear;
    }

    img {
        width: 75px;
        height: 75px;
        margin: 0 40px;
        background-color: ${props => props.theme.mainReverse};
        padding: 4px;
        border-radius: 50%;
    }
`;