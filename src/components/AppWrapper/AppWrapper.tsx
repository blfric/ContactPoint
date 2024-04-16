import { ReactElement } from "react";
import { NavBar } from "components/Navbar";
import { Footer } from "components/Footer/";

type AppWrapperOptions = {
    children: ReactElement | Array<ReactElement>
}

const AppWrapper = ({ children } : AppWrapperOptions): ReactElement => {
    return(
        <main>
            <NavBar />
            {children}
            <Footer />
        </main>
    )
}

export default AppWrapper;