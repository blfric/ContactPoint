import { AboutMe } from "components/AboutMe";
import { WelcomeTitle } from "components/WelcomeTitle";

export const Home = (): JSX.Element => {
    return(
        <>
            <WelcomeTitle />
            <AboutMe />
        </>
    )
}