import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./public.routes";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import authorRoutes from "./author.routes";
import adminRoutes from "./admin.routes";
import errorRoutes from "./error.routes";

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            ...publicRoutes,
            ...authRoutes,
            ...userRoutes,
            ...authorRoutes,
            ...adminRoutes,
            ...errorRoutes,
        ],
    },
]);
