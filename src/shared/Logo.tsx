import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to={'/'}><h1 className='text-3xl! font-bold! font-body! text-main!'>Pro Blog</h1></NavLink>
    );
};

export default Logo;