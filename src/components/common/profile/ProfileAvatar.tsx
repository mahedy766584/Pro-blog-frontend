import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export type TProfileProps = {
    profileImage: string | undefined;
    userLastName: string;
    userFirstName: string;
    authorLastName?: string;
    authorFirstName?: string;
};

const ProfileAvatar = ({ profileImage, userFirstName, userLastName }: TProfileProps) => {
    return (
        <div className="flex items-center gap-3  cursor-pointer w-fit">
            <Avatar
                src={profileImage}
                icon={!profileImage && <UserOutlined />}
                size={'small'}
            />
            <span className="text-[#777777] font-normal">
                {userFirstName} {userLastName}
            </span>
        </div>
    );
};

export default ProfileAvatar;