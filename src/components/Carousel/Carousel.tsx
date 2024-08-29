import { useEffect, useRef, useState } from "react";
import { CarouselItem, CarouselSection } from "./CarouselStyles";
import { ImageCarousel } from "./utils";
import { useTranslation } from "react-i18next";

export const Carousel = () => {
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const [state, setState] = useState(1);
  const [itemWidth, setItemWidth] = useState(0);

  const nextItem = () => {
    const element = carouselRef.current as unknown as HTMLElement;
    if(element) {
      if(state < ImageCarousel.length){
        const { offsetWidth } = element;
        if(state === 1) {
          setItemWidth(offsetWidth);
        }
        const nextPosition = state * itemWidth === 0 ? offsetWidth : itemWidth;
        element.scrollBy({ left: nextPosition, behavior: 'smooth' });
        setState(prevState => prevState + 1 );
      }else {
        setState(1);
        element.scrollTo({ left: 0 });
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextItem();
    }, 3500);
    return () => clearInterval(intervalId);
  });

  return (
    <CarouselSection ref={carouselRef}>
      {ImageCarousel.map((image) => {
        const {id, alt, src, title} = image;
        return <CarouselItem key={id}>
          <h3>{t(title)}</h3>
          <img src={src} alt={alt}/>
        </CarouselItem>
      })}
    </CarouselSection>
  );
};