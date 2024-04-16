import { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SlideElementFromLeft = keyframes`
  0% {
    transform: translateX(-70%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const SlideElementFromRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const ShowProgressively = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: .7;
  }
  100% {
    transform: 1;
  }
`;

export const RemoveCover = keyframes`
  0% {
    width: 100%;
    height: 100%;
  }
  20% {
    width: 100%;
    height: 100%;
  }
  40% {
    width: 100%;
    height: 100%;
  }
  60% {
    width: 100%;
    height: 100%;
  }
  80% {
    width: 0%;
    height: 0%;
  }
  100% {
    width: 0%;
    height: 0%;
  }
`;

export const blinkBox =  (color: string) => keyframes`
  0% {
    background-color: ${color};
  }
  10% {
    background-color: transparent;
  }
  20% {
    background-color: ${color};
  }
  30% {
    background-color: transparent;
  }
  40% {
    background-color: ${color};
  }
  50% {
    background-color: transparent;
  }
  60% {
    background-color: ${color};
  }
  70% {
    background-color: transparent;
  }
  80% {
    background-color: ${color};
  }
  90% {
    background-color: transparent;
  }
  100% {
    background-color: ${color};
  }
`;