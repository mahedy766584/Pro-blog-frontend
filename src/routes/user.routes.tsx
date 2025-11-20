import MainLayout from "@/layouts/MainLayout";
import ProtectedRoute from "@/layouts/ProtectedRoute";
import SmartHome from "@/pages/home/SmartHome";
import Library from "@/pages/library/Library";
import Profile from "@/pages/profile/Profile";
import Stories from "@/pages/stories/Stories";

const userRoutes = [
    {
        path: "home",
        element: (
            <ProtectedRoute role={["user", "author", "admin"]}>
                <MainLayout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <SmartHome /> },
            { path: "library", element: <Library /> },
            { path: "profile", element: <Profile /> },
            { path: "stories", element: <Stories /> },
        ],
    },
];

export default userRoutes;
