import { createBrowserRouter } from "react-router-dom";
import SmartHome from "@/pages/home/SmartHome";
import MainLayout from "@/layouts/MainLayout";
import WriteBlog from "@/pages/writeBlog/WriteBlog";
import ProtectedRoute from "@/layouts/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <SmartHome />,
            },
            {
                path: '/write',
                element: <ProtectedRoute role={["user", "author", "admin"]}>
                    <WriteBlog />
                </ProtectedRoute>,
            },
        ],
    },
]);
