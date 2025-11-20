import { logout } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { UserOutlined } from '@ant-design/icons';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Avatar } from 'antd';
import { BadgeQuestionMark, LogOut, Settings } from 'lucide-react';
import ThemeToggleRound from '../theme/ThemeToggleRound';

export default function DrawerLg() {

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="text-right">
      <Menu>
        <MenuButton className={`cursor-pointer`}>
          <Avatar size="large" icon={<UserOutlined />} />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 space-y-3! pb-4! shadow-md! origin-top-right rounded-md bg-main! p-2! text-sm/6 text-sec transition duration-100  ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          <MenuItem>
            <div className="group flex w-full items-center gap-4! rounded-lg px-3! data-focus:bg-white/10 py-2!">
              <Avatar size={"large"} icon={<UserOutlined />} />
              <span className='flex flex-col text-start'>
                <p className='first-letter:uppercase'>mehediWeb</p>
                <small>View profile</small>
              </span>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="group py-2! cursor-pointer! gap-3! hover:text-main! flex w-full items-center  rounded-lg px-3! data-focus:bg-white/10">
              <Settings />
              <p className='first-letter:uppercase'>Settings</p>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="group cursor-pointer! gap-3! hover:text-main! flex w-full items-center  rounded-lg px-3! py-2! data-focus:bg-white/10">
              <BadgeQuestionMark />
              <p className='first-letter:uppercase'>Help</p>
            </div>
          </MenuItem>
          <MenuItem>
            <div onClick={handleLogout} className="group cursor-pointer! gap-3! hover:text-main! flex w-full items-center  rounded-lg px-3! py-2! data-focus:bg-white/10">
              <LogOut />
              <p className='first-letter:uppercase'>Logout</p>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="group cursor-pointer! gap-3! hover:text-main! flex w-full items-center  rounded-lg px-3! py-2! data-focus:bg-white/10">
              <ThemeToggleRound />
            </div>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
