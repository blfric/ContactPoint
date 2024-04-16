import { createBrowserRouter } from "react-router-dom";
import { NavBar } from "components/Navbar";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
    }
]);

