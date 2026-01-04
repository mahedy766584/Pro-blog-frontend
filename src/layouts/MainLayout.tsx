import Footer from "@/components/common/shared/Footer";
import Header from "@/components/common/shared/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {


    return (
        <div>
            <Header/>
                <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;