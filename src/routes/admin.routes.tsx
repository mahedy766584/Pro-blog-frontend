import AdminDashboardLayout from "@/layouts/AdminDashboardLayout";
import ProtectedRoute from "@/layouts/ProtectedRoute";
import AdminDashboard from "@/pages/dashboard/admin/AdminDashboard";
import ManageBlog from "@/pages/dashboard/admin/ManageBlog";
import ManageUser from "@/pages/dashboard/admin/ManageUser";

const adminRoutes = [
    {
        path: "admin",
        element: (
            <ProtectedRoute role="admin">
                <AdminDashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <AdminDashboard/> },
            { path: "users", element: <ManageUser/> },
            { path: "blogs", element: <ManageBlog/>},
        ],
    },
];

export default adminRoutes;
