import { MenuOutlined } from '@ant-design/icons';
import type { SearchProps } from 'antd/es/input';
import { Input } from 'antd';


const { Search } = Input;

const Header = () => {

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className='flex items-center justify-between px-10 py-3 border-b-[0.8px] border-main'>
            <div className='flex items-center gap-7'>
                <MenuOutlined className='text-2xl text-sec cursor-pointer' />
                <h1 className='text-3xl font-bold font-body text-main'>Pro Blog</h1>
                <Search placeholder="Search" onSearch={onSearch} style={{ width: 200 }} />
            </div>
            <div>
                <h1>Left side</h1>
            </div>
        </div>
    );
};

export default Header;