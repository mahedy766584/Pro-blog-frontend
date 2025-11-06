import { NavLink } from "react-router-dom";
import type { TNavLink } from "./navlinks";

type Props = {
    to: string;
    label: string;
    Icon: TNavLink["Icon"];
    onClick?: () => void;
};

const ActiveLink = ({ to, label, Icon, onClick }: Props) => {
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) => {
                const base = `
                    relative flex items-center gap-2 text-[18px] font-normal px-6 mt-1.5
                    transition-all duration-300 ease-out group
                `;

                const activeStyle = `text-main! dark:text-white font-normal! before:h-full`;

                const normalStyle = `text-sec! hover:text-main! dark:text-[#9d9d9d] dark:hover:text-white`;

                return `
                    ${base}
                    ${isActive ? activeStyle : normalStyle}
                    before:absolute before:left-0 before:top-0 before:h-0 before:w-0.5
                    before:bg-linear-to-b before:from-gray-400 before:to-gray-700
                    before:rounded-full before:transition-all before:duration-300 before:ease-out
                    hover:before:h-full ml-2
            `;
            }}
        >
            {({ isActive }) => (
                <>
                    <Icon
                        className={`w-5 h-5 opacity-90 transition-colors duration-300
                        ${isActive
                                ? "text-main! dark:text-white"
                                : "text-sec! group-hover:text-main! dark:group-hover:text-white"
                            }
            `}
                    />
                    {label}
                </>
            )}
        </NavLink>
    );
};

export default ActiveLink;
