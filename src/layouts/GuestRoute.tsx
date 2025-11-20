import { useAppSelector } from "@/redux/hooks";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type TGuestRouteProps = {
    children: ReactNode;
};

const GuestRoute = ({ children }: TGuestRouteProps) => {
    const { token } = useAppSelector((state) => state.auth);

    if (token) return <Navigate to="/home" replace />;

    return children;
};

export default GuestRoute;
