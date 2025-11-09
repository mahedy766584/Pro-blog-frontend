import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/layouts/LandingPage";
import MainLayout from "@/layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/landing",
        errorElement: <p>Page not found</p>,
        element: <LandingPage />,
    },
    {
        path: "/",
        element: (
            <MainLayout/>
        ),
        children: [

        ],
        errorElement: <p>Page not found</p>
    }
]);

export default router;