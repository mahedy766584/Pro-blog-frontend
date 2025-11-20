import { useAppSelector } from "@/redux/hooks";
import LandingPage from "../Landing/LandingPage";
import Home from "./Home";

const SmartHome = () => {
    const { user, token } = useAppSelector((state) => state.auth);

    if (user && token) {
        return <Home />
    }

    return <LandingPage />;
};

export default SmartHome;