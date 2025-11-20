import AuthorDashboardLayout from "@/layouts/AuthorDashboardLayout";
import ProtectedRoute from "@/layouts/ProtectedRoute";
import AuthorDashboard from "@/pages/dashboard/author/AuthorDashboard";

const authorRoutes = [
    {
        path: "author",
        element: (
            <ProtectedRoute role="author">
                <AuthorDashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <AuthorDashboard /> },
            { path: "blogs", element: "MyBlogs" },
            { path: "blogs/create", element: "CreateBlog" },
            { path: "blogs/edit/:id", element: "EditBlog" },
        ],
    },
];

export default authorRoutes;
