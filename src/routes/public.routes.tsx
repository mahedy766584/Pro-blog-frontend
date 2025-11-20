import GuestRoute from "@/layouts/GuestRoute";
import LandingPage from "@/pages/Landing/LandingPage";

const publicRoutes = [
    {
        index: true,
        element: (
            <GuestRoute>
                <LandingPage />
            </GuestRoute>
        ),
    }
];

export default publicRoutes;
