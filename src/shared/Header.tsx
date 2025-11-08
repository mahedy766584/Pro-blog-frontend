import { Bell, Menu, Search, SquarePen } from 'lucide-react';
import Drawer from "../components/drawer/DrawerLg";
import Logo from './Logo';
import DrawerSm from '@/components/drawer/DrawerSm';

type HeaderProps = {
    onMenuClick: () => void;
};

const Header = ({ onMenuClick }: HeaderProps) => {
    return (
        <>
            <div className='hidden lg:flex! items-center! justify-between! px-8! py-3! border-b-[0.8px! border-main!'>
                <div className='flex items-center gap-7'>
                    <Menu onClick={onMenuClick}
                        className='text-sec! cursor-pointer!'
                    />
                    <Logo />
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
                    <Drawer />
                </div>
            </div>
            <div className='lg:hidden flex justify-between px-3! py-3!'>
                <div className='flex items-center gap-5'>
                    <DrawerSm />
                    <Logo />
                </div>
                <div className='flex items-center gap-5'>
                    <button><Search className='text-sec' /></button>
                    <Drawer />
                </div>
            </div>
        </>
    );
};

export default Header;