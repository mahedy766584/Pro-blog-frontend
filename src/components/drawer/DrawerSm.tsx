import React, { useState } from 'react';
import { Drawer, Space } from 'antd';
import { Menu } from 'lucide-react';
import Logo from '@/shared/Logo';
import { navLinks } from '../sidebar/navLinks';
import ActiveLink from '../sidebar/ActiveLink';

const DrawerSm: React.FC = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Space>
                <Menu onClick={showDrawer}
                    className='text-sec! cursor-pointer!'
                />
            </Space>
            <Drawer
                rootClassName="
                    [&_.ant-drawer-content-wrapper]:transition-transform
                    [&_.ant-drawer-content-wrapper]:duration-[750ms]
                    [&_.ant-drawer-content-wrapper]:ease-[cubic-bezier(0.16,1,0.3,1)]
                    [&_.ant-drawer-content-wrapper]:-translate-x-full
                    [&.ant-drawer-open_.ant-drawer-content-wrapper]:translate-x-0

                    [&_.ant-drawer-mask]:transition-opacity
                    [&_.ant-drawer-mask]:duration-[750ms]
                    [&_.ant-drawer-mask]:ease-[cubic-bezier(0.16,1,0.3,1)]
                    [&_.ant-drawer-mask]:opacity-0
                    [&.ant-drawer-open_.ant-drawer-mask]:opacity-100
                    "
                width={250}
                title={<Logo />}
                placement="left"
                onClose={onClose}
                open={open}
            >
                <nav className="flex! flex-col! gap-6!">
                    {navLinks.map((link) => (
                        <ActiveLink key={link.to} to={link.to} label={link.label} Icon={link.Icon} />
                    ))}
                </nav>
            </Drawer>
        </>
    );
};

export default DrawerSm;