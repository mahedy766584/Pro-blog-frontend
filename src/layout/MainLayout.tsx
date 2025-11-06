import ActiveLink from "@/components/sidebar/ActiveLink";
import { navLinks } from "@/components/sidebar/navlinks";
import Header from "@/shared/Header";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Row>
                <Col span={4} className="w-full h-screen">
                    <nav className="flex flex-col gap-6 text-start">
                        {navLinks.map((link) => (
                            <ActiveLink key={link.to} to={link.to} label={link.label} Icon={link.Icon} />
                        ))}
                    </nav>
                </Col>
                <Col span={14} className=" w-full h-screen border-x-[0.8px] border-main">
                    <Outlet />
                    <h1>Middle side</h1>
                </Col>
                <Col span={6} className=" w-full h-screen">
                    <h1>Right side</h1>
                </Col>
            </Row>
        </div>
    );
};

export default MainLayout;