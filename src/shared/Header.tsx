import { Bell, Menu, Search, SquarePen } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Drawer from "../components/theme/Drawer";

type HeaderProps = {
    onMenuClick: () => void;
};


const Header = ({ onMenuClick }: HeaderProps) => {

    return (
        <div className='flex! items-center! justify-between! px-8! py-3! border-b-[0.8px]! border-main!'>
            <div className='flex items-center gap-7'>
                <Menu onClick={onMenuClick}
                    className='text-sec! cursor-pointer!'
                />
                <NavLink to={'/'}><h1 className='text-3xl! font-bold! font-body! text-main!'>Pro Blog</h1></NavLink>
                <div className='flex! gap-3! items-center! bg-gray-100! opacity-70! px-5! rounded-2xl!'>
                    <Search className='text-sec' />
                    <input type='search' placeholder='Search' className='outline-0! border-0! px-1! py-2!' />
                </div>
            </div>
            <div className='flex items-center gap-7'>
                <span className='flex items-center gap-1.5 cursor-pointer'>
                    <SquarePen className='text-sec' />Write
                </span>
                <Bell className='text-sec cursor-pointer' />
                {/* <SettingsDrawer /> */}
                <Drawer/>
            </div>
        </div>
    );
};

export default Header;