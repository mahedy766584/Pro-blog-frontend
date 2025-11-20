import { useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {

    const user = useAppSelector((state) => (state.auth.user));

    const menus = {
        user: [
            { label: "Dashboard", to: "/dashboard" },
            { label: "Bookmarks", to: "/dashboard/bookmarks" },
            { label: "History", to: "/dashboard/history" },
            { label: "Settings", to: "/dashboard/settings" },
        ],
        author: [
            { label: "Dashboard", to: "/author/dashboard" },
            { label: "My Blogs", to: "/author/blogs" },
            { label: "Create", to: "/author/blogs/create" },
        ],
        admin: [
            { label: "Dashboard", to: "/admin/dashboard" },
            { label: "Users", to: "/admin/users" },
            { label: "Blogs", to: "/admin/blogs" },
            { label: "Reports", to: "/admin/reports" },
        ],
    };

    const items = user ? menus[user.role] : [];

    return (
        <div className="p-6 h-full">
            <div className="mb-6">
                <div className="font-bold text-lg">ProBlog</div>
            </div>

            <nav className="space-y-2">
                {items.map((it) => (
                    <Link
                        key={it.to}
                        to={it.to}
                        className="block py-2 px-3 rounded hover:bg-gray-100"
                    >
                        {it.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default DashboardSidebar;