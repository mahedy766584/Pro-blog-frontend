import { NavLink } from "react-router-dom";
import type { TNavLink } from "./navLinks";

type Props = {
    to: string;
    label: string;
    Icon?: TNavLink["Icon"];
    onClick?: () => void;
};

const ActiveLink = ({ to, label, Icon, onClick }: Props) => {
    return (
        <NavLink
            to={to}
            end={to === "/home"}
            onClick={onClick}
            className={Icon ? 'flex items-center gap-1' : ''}
        >
            {label}
            {
                Icon ? <Icon className="w-3.5"/> : ""
            }
        </NavLink>
    );
};

export default ActiveLink;
