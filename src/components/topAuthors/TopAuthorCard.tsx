import type { TAuthorCardProps } from "@/types";
import { FacebookOutlined, InstagramOutlined, XOutlined } from "@ant-design/icons";
import { Avatar } from "antd";


const TopAuthorCard = ({ author }: TAuthorCardProps) => {

    const {profileImage, bio, name} = author || {};

    return (
        <div className="flex items-center gap-2">
            <Avatar size={64} src={profileImage}/>
            <div className="space-y-1">
                <h1 className="font-medium">{name.firstName} {name.lastName}</h1>
                <p>{bio}</p>
                <div className="flex items-center gap-2">
                    <button className="hover:bg-[#00AAA1] hover:text-[#E8F3F3] duration-300 p-1 rounded text-lg flex justify-center items-center"><FacebookOutlined/></button>
                    <button className="hover:bg-[#00AAA1] hover:text-[#E8F3F3] duration-300 p-1 rounded text-lg flex justify-center items-center"><XOutlined/></button>
                    <button className="hover:bg-[#00AAA1] hover:text-[#E8F3F3] duration-300 p-1 rounded text-lg flex justify-center items-center"><InstagramOutlined/></button>
                </div>
            </div>
        </div>
    );
};

export default TopAuthorCard;