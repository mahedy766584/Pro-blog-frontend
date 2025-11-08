import { UserOutlined } from '@ant-design/icons';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Avatar } from 'antd';

export default function Example() {
  return (
    <div className="text-right">
      <Menu>
        <MenuButton className={`cursor-pointer`}>
          <Avatar size="large" icon={<UserOutlined />} />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-md bg-main! p-2! text-sm/6 text-sec transition duration-100  ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          <MenuItem>
            <div className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
              <Avatar size={"large"} icon={<UserOutlined />} />
                <span className='flex flex-col text-start'>
                  <p className='first-letter:uppercase'>mehediWeb</p>
                  <small>View profile</small>
                </span>
            </div>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
