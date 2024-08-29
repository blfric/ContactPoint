import { StackCarouselSection } from "./StackCarouselStyles"
import { carouselStack } from "./utils"

export const StackCarousel = () => {
    return(
        <StackCarouselSection>
            <div className="slide-logos">
                {carouselStack.map((item, index) => {
                    const {src, alt} = item;
                    return(<img key={index + Math.random()} src={src} alt={alt}/>);
                })}
            </div>
            <div className="slide-logos">
                {carouselStack.map((item, index) => {
                    const {src, alt} = item;
                    return(<img key={index + Math.random()} src={src} alt={alt}/>);
                })}
            </div>
        </StackCarouselSection>
    )
}