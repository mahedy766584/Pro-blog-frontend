import ActiveLink from "@/components/sidebar/ActiveLink";
import { navLinks } from "@/components/sidebar/navLinks";
import Header from "@/shared/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="h-screen! overflow-hidden!">
            <Header onMenuClick={toggleSidebar} />

            <div className="flex h-[calc(100vh-70px)]! transition-all! duration-500! ease-in-out!">

                {/* Sidebar */}
                <div
                    className={`
                    h-full! bg-glass! backdrop-blur-xl!  lg:transition-all! lg:duration-500! lg:ease-in-out! hidden! lg:flex!
                    ${isSidebarOpen ? "lg:w-60 opacity-100!" : "lg:-ml-40!"}
                    overflow-hidden!
                        `}
                >
                    <nav className="flex! flex-col! gap-6! mt-6!">
                        {navLinks.map((link) => (
                            <ActiveLink key={link.to} to={link.to} label={link.label} Icon={link.Icon} />
                        ))}
                    </nav>
                </div>

                {/* Middle Content */}
                <div
                    className={`
                        border-x! relative! border-main! h-full! lg:transition-all! lg:duration-500! lg:ease-in-out!
                        ${isSidebarOpen ? "lg:flex-[0.6]! w-full!" : "lg:flex-[0.7]! w-full!"}
                        px-6!
                    `}
                >
                    <Outlet />
                    <h1 className={`mt-8! ${isSidebarOpen ? '' : 'lg:ml-9!'}`}>Middle side</h1>
                </div>

                {/* Right Sidebar */}
                <div
                    className={`
            h-full! transition-all! duration-500! ease-in-out! hidden! lg:flex!
            ${isSidebarOpen ? "flex-[0.3]!" : "flex-[0.3]!"}
        `}
                >
                    <h1 className="mt-8!">Right side</h1>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
