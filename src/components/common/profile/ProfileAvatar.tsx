import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export type TProfileProps = {
    profileImage: string;
    authorLastName: string;
    authorFirstName: string;
};

const ProfileAvatar = ({ profileImage, authorFirstName, authorLastName }: TProfileProps) => {
    return (
        <div className="flex items-center gap-3 mb-3 cursor-pointer w-fit">
            <Avatar
                src={profileImage}
                icon={!profileImage && <UserOutlined />}
            />
            <span className="hover:underline text-main font-normal">
                {authorFirstName} {authorLastName}
            </span>
        </div>
    );
};

export default ProfileAvatar;