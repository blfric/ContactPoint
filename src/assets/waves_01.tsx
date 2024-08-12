import { ThemeContext } from "providers/ThemeWrapper";
import { useContext } from "react";

type Theme = 'light' | 'dark';

const WaveImage = (): any => {
    const { currentTheme } = useContext(ThemeContext) as { currentTheme: Theme };
    const colorMap: {light: string, dark: string} = {
        light: '#111111',
        dark: '#BA274A'
    };

    return(
        <svg
            style={{borderBottomLeftRadius: 6, borderBottomRightRadius: 6}} 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1640 899">
                <path fill={colorMap[currentTheme]} fillOpacity="1" d="M0,96L1640,242L1640,899L0,899Z"></path></svg>
    );
};
 
export default WaveImage;