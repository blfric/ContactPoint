import { AboutMe } from "components/AboutMe";
import Experience from "components/Experience/Experience";
import { WelcomeTitle } from "components/WelcomeTitle";

export const Home = (): JSX.Element => {
    return(
        <>
            <WelcomeTitle />
            <AboutMe />
            <Experience />
        </>
    )
}